#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { transformNamespace } = require('../')

const cliArgs = process.argv.slice(2)

let inputPath = process.cwd()
let outputPath = inputPath
if (cliArgs.length > 0 && cliArgs[0].indexOf('-') !== 0) {
  inputPath = cliArgs[0]
  outputPath = inputPath
}

const inputArgIndex = cliArgs.indexOf('-i')
const outputArgIndex = cliArgs.indexOf('-o')
if (inputArgIndex > -1 && cliArgs[inputArgIndex + 1]) inputPath = cliArgs[inputArgIndex + 1]
if (outputArgIndex > -1 && cliArgs[outputArgIndex + 1]) outputPath = cliArgs[outputArgIndex + 1]

const getFiles = (srcpath) => {
  return fs.readdirSync(srcpath).filter((file) => {
    return !fs.statSync(path.join(srcpath, file)).isDirectory()
  }).filter((file) => path.extname(file) === '.json').map((file) => path.join(srcpath, file))
}

const getDirectories = (srcpath) => {
  return fs.readdirSync(srcpath).filter((file) => {
    return fs.statSync(path.join(srcpath, file)).isDirectory()
  }).map((dir) => path.join(srcpath, dir))
}

function getAllFiles (srcpath) {
  let files = getFiles(srcpath)
  const dirs = getDirectories(srcpath)
  dirs.forEach((dir) => {
    files = files.concat(getAllFiles(dir))
  })
  return files
}

function mkdirRecurse (inputPath) {
  if (fs.existsSync(inputPath)) return
  const basePath = path.dirname(inputPath)
  if (fs.existsSync(basePath)) fs.mkdirSync(inputPath)
  mkdirRecurse(basePath)
}

const allFiles = getAllFiles(inputPath)

allFiles.forEach((file) => {
  const namespace = JSON.parse(fs.readFileSync(file, 'utf-8'))
  const sepFile = file.split(path.sep)
  const lng = sepFile[sepFile.length - 2]
  const transformedNamespace = transformNamespace(lng, namespace)

  const outFile = file.replace(inputPath, outputPath)
  mkdirRecurse(path.dirname(outFile))
  fs.writeFileSync(outFile, JSON.stringify(transformedNamespace, null, 2), 'utf-8')
})

console.log(`transformed ${allFiles.length} files: ${outputPath}`)
