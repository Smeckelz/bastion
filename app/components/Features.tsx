import styles from './Features.module.css'

export default function Features() {
  const items = [
    { title: 'Bastion Tracking', desc: 'Monitor rooms, hirelings, and events with a lightweight map-driven UI.' },
    { title: 'World Codex', desc: 'Centralized lore, NPCs, and artifact entries with rich-text support.' },
    { title: 'Session Recaps', desc: 'Auto-generate session notes and highlights for quick sharing and review.' },
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Features</h2>
      <p className={styles.lead}>Tools to help you run cleaner sessions and preserve your world’s history.</p>

      <ul className={styles.grid}>
        {items.map((it) => (
          <li key={it.title} className={`${styles.card} ${styles.cardHover}`}>
            <h3 className={styles.cardTitle}>{it.title}</h3>
            <p className={styles.muted}>{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
