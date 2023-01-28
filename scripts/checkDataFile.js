import { paths } from 'config'
import { existsSync } from 'fs'

export default function checkDataFile() {
  return existsSync(paths.data)
}
