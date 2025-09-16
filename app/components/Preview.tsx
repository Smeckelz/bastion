import styles from './Preview.module.css'

export default function Preview() {
  return (
    <section id="preview" className={styles.previewSection}>
      <h2 className={styles.heading}>Bastion Tracker Preview</h2>
      <p className={styles.lead}>A quick look at rooms, hirelings, and tools you’d use during a session.</p>

      <div className={`${styles.gridTwo} mt-6`}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Rooms & Hirelings</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>The Fallen Keep — Occupied (3 NPCs)</li>
            <li className={styles.listItem}>Sable Market — Busy (traders)</li>
            <li className={styles.listItem}>Gloom Cavern — Hazards reported</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Bastion Tools</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Timeline — Jump to events</li>
            <li className={styles.listItem}>Map pins — Quick teleport</li>
            <li className={styles.listItem}>NPC notes — Private / shared</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
