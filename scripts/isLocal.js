export default function isLocal() {
  const isLocal = process.env.NODE_ENV === 'development'
  return isLocal
}
