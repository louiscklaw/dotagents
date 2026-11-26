#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT = __dirname;
const AGENTS_NAME = fs
  .globSync('003_source/agents/*.md', { cwd: ROOT, nodir: true })
  .map((file) => path.basename(file, '.md'))
  .sort();
const TOOLS_NAME = ['.codebuddy','.qoder','.copilot','.opencode','.zcode'];

// Split a markdown file into the inner lines of its leading `---` ... `---`
// block (without the delimiters) and the remaining body.
function splitFrontmatter(content, source_path) {
  const lines = content.split(/\r?\n/);
  if (lines[0]?.trim() !== '---') return { frontmatter: '', body: content };

  const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
  if (end === -1) return { frontmatter: '', body: content };

  return {
    frontmatter: [
      `# ${source_path}`,
      lines.slice(1, end).join('\n').trim()
    ].join('\n'),
    body: lines.slice(end + 1).join('\n').trimStart(),
  };
}

for (const tool of TOOLS_NAME) {
  for (const agentName of AGENTS_NAME) {
    const target = path.join(ROOT, '009_build', tool, 'agents', `${agentName}.md`);
    const frontmatter = path.join(
      ROOT,
      '008_tools_customize',
      tool,
      'agents',
      'frontmatter',
      `${agentName}.md`
    );
    const source = path.join(ROOT, '003_source', 'agents', `${agentName}.md`);

    fs.mkdirSync(path.dirname(target), { recursive: true });

    const { frontmatter: sourceFrontmatter, body } =  splitFrontmatter(
      fs.readFileSync(source, 'utf8'), source
    );
    const customizeFrontmatter = fs.existsSync(frontmatter)
      ? splitFrontmatter(fs.readFileSync(frontmatter, 'utf8'),frontmatter).frontmatter
      : '';

    // Merge the two frontmatter inputs into one leading YAML block. The inputs
    // stay split on disk; only the generated output has a single frontmatter.
    const mergedFrontmatter = [ 
      sourceFrontmatter,"\n",
      customizeFrontmatter, 
    ]
      .filter(Boolean)
      .join('\n');

    console.log(mergedFrontmatter);



    let content = `---\n${mergedFrontmatter}\n---\n`;
    content += '\n';

    content += '<!--  this code managed by git@github.com:louiscklaw/dotagents.git -->\n';
    content += `<!-- do not modify this file directly, defined by ${source} -->\n`;
    // The two managed-code notice lines.
    content += '\n';

    content += body;

    fs.writeFileSync(target, content);
  }
}

// Mirrors `npx prettier --write ./009_build` (set -e: throw on non-zero exit).
execFileSync('npx', ['prettier', '--write', './009_build'], {
  cwd: ROOT,
  stdio: 'inherit',
});

console.log('done');
