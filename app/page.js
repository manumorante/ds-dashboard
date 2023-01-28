import { checkDataFile, readDataFile } from 'scripts'

export default function Page() {
  if (!checkDataFile())
    return (
      <div>
        <a href='/create'>Create data file</a>
      </div>
    )

  const data = readDataFile()
  const keysDS = Object.keys(data.DS)
  const keysUI = Object.keys(data.UI)
  const keysSPA = Object.keys(data.SPA)

  return (
    <div className='Page'>
      <h1 className='font-extrabold text-2xl mb-6'>DS dashboard</h1>

      <div className='flex gap-6 wrap'>
        <div>
          <h2 className='font-extrabold text-xl'>DS</h2>
          {keysDS.map((key) => {
            const localImports = data.DS[key].localImports || []

            return (
              <div key={key}>
                <p className='font-bold my-4'>{key}</p>

                {localImports.map((localImport) => {
                  return (
                    <div key={localImport}>
                      <p className='ml-4'>{localImport}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div>
          <h2 className='font-extrabold text-xl'>UI</h2>

          {keysUI.map((key) => {
            const dsImports = data.UI[key].dsImports || []

            return (
              <div key={key}>
                <p className='font-bold my-4'>{key}</p>

                {dsImports.map((dsImport) => {
                  return (
                    <div key={dsImport}>
                      <p className='ml-4'>{dsImport}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div>
          <h2 className='font-extrabold text-xl'>SPA</h2>
          {keysSPA.map((key) => {
            const useCases = data.SPA[key].useCases || []
            return (
              <div key={key}>
                <p className='font-bold my-4'>{key}</p>

                {useCases.map((useCase) => {
                  return (
                    <div key={useCase}>
                      <p className='ml-4'>{useCase}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
