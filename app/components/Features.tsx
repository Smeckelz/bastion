export default function Features() {
  const items = [
    { title: 'Bastion Tracking', desc: 'Monitor rooms, hirelings, and events with a lightweight map-driven UI.' },
    { title: 'World Codex', desc: 'Centralized lore, NPCs, and artifact entries with rich-text support.' },
    { title: 'Session Recaps', desc: 'Auto-generate session notes and highlights for quick sharing and review.' },
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900">Features</h2>
      <p className="mt-2 text-gray-600 max-w-2xl">Tools to help you run cleaner sessions and preserve your world’s history.</p>

      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <li key={it.title} className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
            <p className="mt-2 text-gray-600">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
