import getBetween from "./getBetween"

// Sacamos el nombre: ['Typography']
function getNamesFromImport(str) {
  if (str.includes('lazy(')) return str.split(' ')[1]
  if (str.includes('{')) return getBetween(str, '{', '}')
  return getBetween(str, 'import ', ' from ')
}

// get import lines from
// TODO: leer los lazy: [ "const Overlay = lazy(() => import('../Overlay'))" ]
export default function getImportsFrom(arr, from) {
  const filtered = arr.filter((item) => item.includes(from))
  let out = filtered.map(getNamesFromImport)
  return out?.length > 0 && out[0].split(',')
}