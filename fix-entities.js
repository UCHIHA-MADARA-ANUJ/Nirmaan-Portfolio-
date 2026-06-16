const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('&amp;&amp;')) {
    content = content.replace(/&amp;&amp;/g, '&&');
    changed = true;
  }
  if (content.includes('&amp;')) {
    content = content.replace(/&amp;/g, '&');
    changed = true;
  }
  if (content.includes('&gt;')) {
    content = content.replace(/&gt;/g, '>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed entities in ${file}`);
  }
});
