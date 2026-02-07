import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const SOURCE_URL = 'https://raw.githubusercontent.com/onevcat/MeetCat/master/CHANGELOG.md';
const changelogPath = path.join(rootDir, 'src', 'changelog.md');
const metadataPath = path.join(rootDir, 'src', 'changelog.meta.json');

function hasLocalChangelog() {
  if (!fs.existsSync(changelogPath)) {
    return false;
  }

  const content = fs.readFileSync(changelogPath, 'utf-8').trim();
  return content.length > 0;
}

function writeFiles(markdown) {
  const normalizedMarkdown = markdown.endsWith('\n') ? markdown : `${markdown}\n`;
  const syncedAt = new Date().toISOString();
  const metadata = {
    sourceUrl: SOURCE_URL,
    syncedAt,
  };

  fs.writeFileSync(changelogPath, normalizedMarkdown, 'utf-8');
  fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf-8');

  console.log(`Changelog synced at ${syncedAt}`);
}

async function fetchChangelog() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(SOURCE_URL, {
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

    writeFiles(markdown);
    return;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function main() {
  try {
    await fetchChangelog();
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
