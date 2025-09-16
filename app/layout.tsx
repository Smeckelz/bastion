import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Chronix',
  description: 'Chronix landing page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Diagnostic style — remove after debug */}
        <style>{`body { outline: 6px solid rgba(107,33,168,0.12); }`}</style>
        {/* Removed manual /tw.css link so Next's CSS import (globals.css) is used. */}
        {/* Runtime safeguard: remove any stale /tw.css link that may be served by an older cached HTML */}
        <script dangerouslySetInnerHTML={{ __html: "(function(){try{var l=document.querySelector('link[href=\"/tw.css\"]'); if(l) l.parentNode.removeChild(l);}catch(e){} })();" }} />
      </head>
      <body className="antialiased bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-700">
        {children}
      </body>
    </html>
  )
}
