import { writeFileSync } from 'fs'

export default function saveJSON(jsonPath, data) {
  writeFileSync(jsonPath, JSON.stringify(data, null, 2))
}