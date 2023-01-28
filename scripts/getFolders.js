import { readdirSync, statSync } from 'fs'

// return array with folders from a path
export default function getFolders(path) {
  const files = readdirSync(path)

  let folders = []
  files.forEach(function (file) {
    if (statSync(path + '/' + file).isDirectory()) {
      folders.push(file)
    }
  })

  return folders
}