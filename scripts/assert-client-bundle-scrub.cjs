const fs = require('fs')
const path = require('path')

const national = ['312', '646', '3816'].join('')
const needles = [national, `1${national}`, `+1${national}`]
const staticRoot = path.join(process.cwd(), '.next/static')

function walk(file, files = []) {
  if (!fs.existsSync(file)) return files
  const stat = fs.statSync(file)
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(file)) {
      walk(path.join(file, entry), files)
    }
    return files
  }
  if (/\.(js|json)$/.test(file)) files.push(file)
  return files
}

const staticFiles = walk(staticRoot)
const hits = []

for (const file of staticFiles) {
  const text = fs.readFileSync(file, 'utf8')
  for (const needle of needles) {
    if (text.includes(needle)) {
      hits.push(path.relative(process.cwd(), file))
    }
  }
}

console.log('client_static_files_scanned', staticFiles.length)
console.log('contiguous_blocked_literal_hits', hits.length)
if (hits.length) {
  console.error(hits.join('\n'))
  process.exit(1)
}
console.log(
  'PROOF: .next/static client chunks have 0 contiguous blocked-national literals'
)
