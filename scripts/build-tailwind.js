const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const tailwind = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

async function build() {
  const inputPath = path.join(__dirname, '..', 'app', 'globals.css')
  const outPath = path.join(__dirname, '..', 'public', 'tw.css')
  const input = fs.readFileSync(inputPath, 'utf8')

  try {
    const result = await postcss([tailwind('./tailwind.config.js'), autoprefixer]).process(input, {
      from: inputPath,
      to: outPath,
    })
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, result.css)
    console.log('Compiled Tailwind to', outPath)
  } catch (err) {
    console.error('Failed to compile Tailwind:', err)
    process.exit(1)
  }
}

build()
