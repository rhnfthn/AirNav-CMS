import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const OUTPUT_FILE = path.resolve(projectRoot, '.output/server/chunks/build/server.mjs');

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await fileExists(OUTPUT_FILE))) {
    return;
  }

  const original = await fs.readFile(OUTPUT_FILE, 'utf8');

  // Observed on Windows builds: Rollup-generated namespace object contains
  // `default: default`, which is invalid JS in ESM ("default" is reserved).
  // It should point at the actual default export binding (`nodeServer`).
  const patched = original.replace(/\bdefault:\s*default\b/g, 'default: nodeServer');

  if (patched === original) {
    return;
  }

  // Safety: only apply if the target binding exists.
  if (!/\bconst\s+nodeServer\s*=\s*\{\s*\}\s*;/.test(patched)) {
    throw new Error(`Refusing to patch Nitro output: expected nodeServer binding not found in ${OUTPUT_FILE}`);
  }

  await fs.writeFile(OUTPUT_FILE, patched, 'utf8');
  // eslint-disable-next-line no-console
  console.log('[patch-nitro-output] Patched Nitro node-server output for Windows runtime.');
}

await main();
