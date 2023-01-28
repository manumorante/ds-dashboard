import { readFileSync } from 'fs'

export default function readThisFile(filePath) {
  try {
    const data = readFileSync(filePath)
    return data.toString()
  } catch (error) {
    console.error(`Error reading file: ${filePath}`)
    return ''
  }
}