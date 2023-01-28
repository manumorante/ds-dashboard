import { paths } from 'config'
import { readThisFile, getFolders, getImportsFrom, getUseCases, saveJSON } from 'scripts'

// Esta página crea el archivo output.json con la información de los imports de cada componente

function getTheImports(linesArray) {
  const localImports = getImportsFrom(linesArray, "'../")
  const dsImports = getImportsFrom(linesArray, '@web/ds')
  const uiImports = getImportsFrom(linesArray, '@web/ui')
  const useCases = getUseCases(linesArray)

  return {
    ...(localImports && { localImports }),
    ...(dsImports && { dsImports }),
    ...(uiImports && { uiImports }),
    ...(useCases && { useCases }),
  }
}

function getImportsInFolder(path) {
  let output = {}
  const folder = getFolders(path)

  folder.every((component) => {
    const file = readThisFile(`${path}/${component}/index.js`)
    const linesArray = file.split('\n')
    const importsObj = getTheImports(linesArray)

    let itemObj = new Object()
    itemObj[component] = importsObj

    output = { ...output, ...itemObj }

    return true
  })

  return output
}

export default function Page() {
  const data = {
    DS: getImportsInFolder(paths.ds),
    UI: getImportsInFolder(paths.ui),
    SPA: getImportsInFolder(paths.spa),
  }
  
  saveJSON('data.json', data)

  
  return (
    <div className='Page'>
      <h1 className='font-extrabold text-2xl'>Data creada</h1>
      <p>
        <a href='/'>Ir a la home</a>
      </p>
    </div>
  )
}
