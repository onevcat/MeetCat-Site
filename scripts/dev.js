import { spawn } from 'child_process';

const processes = [];

function spawnProcess(command, args, options) {
  const child = spawn(command, args, { stdio: 'inherit', ...options });
  processes.push(child);
  child.on('exit', (code) => {
    if (code && code !== 0) {
      process.exitCode = code;
    }
  });
  return child;
}

spawnProcess('node', ['scripts/watch-static.js']);
spawnProcess('vite', []);

function shutdown() {
  processes.forEach((child) => {
    child.kill('SIGTERM');
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
