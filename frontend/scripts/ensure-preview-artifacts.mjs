import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const REQUIRED_FILES = [
  path.resolve(projectRoot, '.nuxt/dist/server/server.mjs'),
  path.resolve(projectRoot, '.nuxt/dist/server/client.manifest.mjs'),
  path.resolve(projectRoot, '.nuxt/dist/server/client.precomputed.mjs'),
  path.resolve(projectRoot, '.output/server/index.mjs'),
];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const child = spawn(npmCmd, ['run', 'build'], {
      cwd: projectRoot,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build failed with exit code ${code}`));
      }
    });
  });
}

async function main() {
  const checks = await Promise.all(REQUIRED_FILES.map(fileExists));
  const missing = REQUIRED_FILES.filter((_, index) => !checks[index]);

  if (missing.length === 0) {
    return;
  }

  console.log('[ensure-preview-artifacts] Missing build artifacts, running `npm run build`...');
  await runBuild();
}

await main();
