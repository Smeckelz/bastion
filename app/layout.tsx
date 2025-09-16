import './globals.css'
import styles from './layout.module.css'
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
      <body className={`${styles.body} ${styles.bgGradient}`}>
        {children}
      </body>
    </html>
  )
}
