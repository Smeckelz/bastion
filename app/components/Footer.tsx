import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.small}>© {new Date().getFullYear()} Chronix — Built with care.</p>
      </div>
    </footer>
  )
}
