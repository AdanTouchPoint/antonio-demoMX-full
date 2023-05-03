import './globals.css'
import { GTMnoscript } from './lib/GTMnoscript'
import { GAscript } from './lib/GAscript'
import { GTMscript } from './lib/GTMscript'
export const metadata = {
  title: 'Demo | Plataforma',
  description: 'Demo | Plataforma',
  ogDescription:'Demo | Plataforma'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/63eb23b7e33e0b09a85385b4/fd64a92c-b011-4814-9310-97bd1820ddd5/favicon.ico"/>
    <meta property="og:description" content="Demo | Plataforma"></meta>
      <GTMscript/>
      <GAscript />
    </head>
      <body>
        {children}
        
        <GTMnoscript />
      </body>
    </html>
  )
}
