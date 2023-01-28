import 'styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js App</title>
      </head>
      <body className='bg-zinc-900 text-zinc-200'>
        <div className='Layout mx-auto max-w-3xl p-8'>{children}</div>
      </body>
    </html>
  )
}
