import Hero from './components/Hero'
import Features from './components/Features'
import Preview from './components/Preview'
import Footer from './components/Footer'
import styles from './Page.module.css'

export const metadata = {
  title: 'Chronix',
  description: 'Chronix — Bastion tracking, world codex, and session recaps',
}

export default function Page() {
  return (
    <div className={styles.pageWrap}>
      <main className={`${styles.container} ${styles.lgPadding}`}>
        <Hero />
        <Features />
        <Preview />
      </main>
      <Footer />
    </div>
  )
}
