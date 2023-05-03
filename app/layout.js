import './globals.css'
import { GTMnoscript } from './lib/GTMnoscript'
import { GAscript } from './lib/GAscript'
import { GTMscript } from './lib/GTMscript'
export const metadata = {
  title: 'Apoya la integridad electoral #MiVotoNoSeToca | Plataforma para enviar mensajes de defensa del INE',
  description: 'Únete a la campaña #MiVotoNoSeToca y apoya la integridad electoral en México. Envía mensajes de defensa del INE a través de nuestra plataforma. ¡Participa ahora!',
  ogDescription:'Únete a la campaña #MiVotoNoSeToca y apoya la integridad electoral en México. Envía mensajes de defensa del INE a través de nuestra plataforma. ¡Participa ahora!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/63eb23b7e33e0b09a85385b4/fd64a92c-b011-4814-9310-97bd1820ddd5/favicon.ico"/>
    <meta property="og:description" content="Únete a la campaña #MiVotoNoSeToca y apoya la integridad electoral en México. Envía mensajes de defensa del INE a través de nuestra plataforma. ¡Participa ahora!"></meta>
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
