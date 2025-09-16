"use client"
import { signIn } from 'next-auth/react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridTwo}>
        <div>
          <h1 className={styles.title}>Chronix</h1>
          <p className={styles.subtitle}>Track Bastions, browse the World Codex, and generate session recaps — all in one place. Built for storytellers and keepers of lore.</p>

          <div className={styles.actions}>
            <button
              onClick={() => signIn('discord')}
              className={styles.btn}
            >
              Sign in with Discord
            </button>
            <a href="#preview" className={styles.linkSmall}>See preview</a>
          </div>
        </div>

        <div className={styles.heroGraphicWrap}>
          <div className={styles.heroCard}>
            <img src="/logo.svg" alt="Chronix logo" width={160} height={160} className={styles.contain} />
          </div>
        </div>
      </div>
    </section>
  )
}
