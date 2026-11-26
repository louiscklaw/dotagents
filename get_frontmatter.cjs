#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const SOURCE_DIR = path.join(ROOT, '003_source', 'agents');
const TOOLS_NAME = ['.codebuddy', '.qoder', '.copilot'];

// Return the leading `---` ... `---` block, including the delimiters.
function getFrontmatter(content) {
  if (!content.startsWith('---')) return '';

  const lines = content.split(/\r?\n/);
  const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
  if (end === -1) return '';

  return lines.slice(0, end + 1).join('\n').trimEnd();
}

const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((file) => file.endsWith('.md'))
  .sort();

let withFrontmatter = 0;

for (const file of files) {
  const frontmatter = getFrontmatter(fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8'));
  if (frontmatter) withFrontmatter += 1;

  for (const tool of TOOLS_NAME) {
    const targetDir = path.join(ROOT, '008_tools_customize', tool, 'agents', 'frontmatter');
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, file), frontmatter);
  }
}

console.log(
  `done: ${files.length} files -> ${TOOLS_NAME.join(', ')} (${withFrontmatter} with frontmatter, ${files.length - withFrontmatter} empty)`
);
