export default function Preview() {
  return (
    <section id="preview" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900">Bastion Tracker Preview</h2>
      <p className="mt-2 text-gray-600 max-w-2xl">A quick look at rooms, hirelings, and tools you’d use during a session.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900">Rooms & Hirelings</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="p-3 rounded-lg bg-gray-50">The Fallen Keep — Occupied (3 NPCs)</li>
            <li className="p-3 rounded-lg bg-gray-50">Sable Market — Busy (traders)</li>
            <li className="p-3 rounded-lg bg-gray-50">Gloom Cavern — Hazards reported</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900">Bastion Tools</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="p-3 rounded-lg bg-gray-50">Timeline — Jump to events</li>
            <li className="p-3 rounded-lg bg-gray-50">Map pins — Quick teleport</li>
            <li className="p-3 rounded-lg bg-gray-50">NPC notes — Private / shared</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
