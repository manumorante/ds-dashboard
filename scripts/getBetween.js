export default function getBetween(str, strStart, srtEnd) {
  let out = str.slice(str.indexOf(strStart) + strStart.length, str.indexOf(srtEnd))
  out = out.replaceAll(' as ', ' as')
  out = out.replaceAll(',', ' ')
  out = out.split(' ').filter((item) => item && !item.startsWith('as'))
  return out.toString()
}