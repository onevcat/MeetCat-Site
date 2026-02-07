import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const REPO_OWNER = 'onevcat';
const REPO_NAME = 'MeetCat';
const LATEST_RELEASE_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
const changelogPath = path.join(rootDir, 'src', 'changelog.md');
const metadataPath = path.join(rootDir, 'src', 'changelog.meta.json');

function normalizeTag(input) {
  if (!input) {
    return '';
  }

  return input.trim().replace(/^refs\/tags\//, '');
}

function buildSourceUrl(tag) {
  const safeTag = encodeURIComponent(tag);
  return `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${safeTag}/CHANGELOG.md`;
}

function getTagFromEnvironment() {
  const candidateKeys = [
    'MEETCAT_RELEASE_TAG',
    'RELEASE_TAG',
    'GITHUB_REF_NAME',
    'GITHUB_TAG',
  ];

  for (const key of candidateKeys) {
    const value = normalizeTag(process.env[key] || '');
    if (value) {
      return value;
    }
  }

  return '';
}

function tryParseJsonTag(rawValue) {
  try {
    const parsed = JSON.parse(rawValue);
    const candidates = [
      parsed?.tag,
      parsed?.tag_name,
      parsed?.release?.tag_name,
      parsed?.release?.tag,
      parsed?.ref,
    ];
    for (const candidate of candidates) {
      const normalized = normalizeTag(candidate || '');
      if (normalized) {
        return normalized;
      }
    }
  } catch {
    // Ignore malformed JSON and fallback to plain-text parsing.
  }

  return '';
}

function getTagFromIncomingHookBody() {
  const incomingBody = process.env.INCOMING_HOOK_BODY || '';
  if (!incomingBody.trim()) {
    return '';
  }

  const decodedBody = decodeURIComponent(incomingBody);
  const jsonTag = tryParseJsonTag(decodedBody);
  if (jsonTag) {
    return jsonTag;
  }

  const refMatch = decodedBody.match(/refs\/tags\/([A-Za-z0-9._-]+)/);
  if (refMatch) {
    return normalizeTag(refMatch[1]);
  }

  return normalizeTag(decodedBody);
}

async function getLatestReleaseTag() {
  const response = await fetch(LATEST_RELEASE_API_URL, {
    headers: {
      'User-Agent': 'MeetCat-Site Changelog Sync',
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to resolve latest release tag: HTTP ${response.status}`);
  }

  const payload = await response.json();
  const tag = normalizeTag(payload?.tag_name || '');
  if (!tag) {
    throw new Error('Latest release response does not include tag_name');
  }

  return tag;
}

function hasLocalChangelog() {
  if (!fs.existsSync(changelogPath)) {
    return false;
  }

  const content = fs.readFileSync(changelogPath, 'utf-8').trim();
  return content.length > 0;
}

function writeFiles(markdown, sourceUrl, sourceTag) {
  const normalizedMarkdown = markdown.endsWith('\n') ? markdown : `${markdown}\n`;
  const syncedAt = new Date().toISOString();
  const metadata = {
    sourceUrl,
    sourceTag,
    syncedAt,
  };

  fs.writeFileSync(changelogPath, normalizedMarkdown, 'utf-8');
  fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf-8');

  console.log(`Changelog synced at ${syncedAt}`);
}

async function resolveReleaseTag() {
  const tagFromEnv = getTagFromEnvironment();
  if (tagFromEnv) {
    return tagFromEnv;
  }

  const tagFromHookBody = getTagFromIncomingHookBody();
  if (tagFromHookBody) {
    return tagFromHookBody;
  }

  return getLatestReleaseTag();
}

async function fetchChangelog(sourceUrl, sourceTag) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(sourceUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'MeetCat-Site Changelog Sync',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();
    if (!markdown.trim()) {
      throw new Error('Received empty changelog content');
    }

    writeFiles(markdown, sourceUrl, sourceTag);
    return;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function main() {
  try {
    const releaseTag = await resolveReleaseTag();
    const sourceUrl = buildSourceUrl(releaseTag);

    console.log(`Fetching changelog from tag: ${releaseTag}`);
    await fetchChangelog(sourceUrl, releaseTag);
  } catch (error) {
    if (hasLocalChangelog()) {
      console.warn(`Failed to fetch upstream changelog. Using local cache. ${error.message}`);
      return;
    }

    console.error(`Failed to fetch changelog and no local cache is available. ${error.message}`);
    process.exitCode = 1;
  }
}

await main();
