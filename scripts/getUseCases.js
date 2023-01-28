function getUseCaseFromLine(str) {
  let arr = str.split('.')
  const executeIndex = arr.findIndex((el) => el.includes('execute('))
  const useCase = arr[executeIndex - 1]

  return useCase.toString()
}

export default function getUseCases(arr) {
  const filtered = arr.filter((item) => item.includes('UseCase.execute'))
  if (filtered?.length <= 0) return false

  let out = filtered.map(getUseCaseFromLine)
  let uniqueOut = [...new Set(out)]
  return uniqueOut.sort()
}