import { paths } from 'config'
import { readThisFile } from "scripts"

export default function readDataFile() {
  const jsonString = readThisFile(paths.data)
  return JSON.parse(jsonString)
}
