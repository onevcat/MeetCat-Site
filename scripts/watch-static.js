import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const watchedFiles = [
  'index.html',
  'privacy.html',
  'tos.html',
  'scripts/generate-static.js',
  'src/styles.css',
];

let running = false;
let pending = false;
let debounceTimer = null;

function runGenerate() {
  if (running) {
    pending = true;
    return;
  }

  running = true;
  const child = spawn('node', ['scripts/generate-static.js'], {
    cwd: rootDir,
    stdio: 'inherit',
  });

  child.on('exit', () => {
    running = false;
    if (pending) {
      pending = false;
      runGenerate();
    }
  });
}

function scheduleGenerate() {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    runGenerate();
  }, 200);
}

watchedFiles.forEach((relativePath) => {
  const fullPath = path.join(rootDir, relativePath);
  try {
    fs.watch(fullPath, scheduleGenerate);
  } catch {
    // Ignore missing files to keep watcher resilient.
  }
});

runGenerate();
