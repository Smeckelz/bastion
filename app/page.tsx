// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 flex flex-col">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800">
            Chronicle Your World with <span className="text-purple-700">Chronix</span>
          </h1>
          <p className="text-lg text-gray-600">
            A modern Bastion & campaign tracker for Dungeons & Dragons — blending 
            storytelling with smart tools to help your world thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/dashboard"
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Sign in with Discord
            </Link>
            <Link
              href="#features"
              className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <Image
            src="/CHRONIX.png"
            alt="Chronix Logo"
            width={300}
            height={300}
            className="mx-auto md:mx-0"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 md:px-20 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Chronix Brings
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Bastion Tracking</h3>
            <p className="text-gray-600">
              Manage your stronghold, rooms, and hirelings with ease, keeping 
              everything in one place.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">World Codex</h3>
            <p className="text-gray-600">
              Build and organize your world’s lore in a structured, searchable codex 
              designed for storytellers.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Session Recaps</h3>
            <p className="text-gray-600">
              Capture every moment with recap logs, making it easy for players to 
              revisit the story.
            </p>
          </div>
        </div>
      </section>

      {/* Bastion Tracker Example */}
      <section id="bastion" className="px-8 md:px-20 py-20 bg-gradient-to-r from-purple-50 via-white to-purple-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Bastion Tracker in Action
        </h2>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-purple-100">
          {/* Example Overview */}
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Blackreach Bastion</h3>
          <p className="text-gray-600 mb-6">
            A snapshot of how your party can manage their stronghold with Chronix:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-bold text-gray-800">Rooms</h4>
                <ul className="text-gray-600 list-disc ml-5">
                  <li>War Room (Strategy & Planning)</li>
                  <li>Training Grounds (Boost Hireling Skills)</li>
                  <li>Alchemy Lab (Potion Crafting)</li>
                  <li>Archives (Lore Storage)</li>
                  <li>Common Hall (Rest & Gather)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-bold text-gray-800">Hirelings</h4>
                <ul className="text-gray-600 list-disc ml-5">
                  <li>Ashen Blade – Veteran Mercenary</li>
                  <li>Donkey – Supply Transport (sometimes chaotic 🐴)</li>
                  <li>Apprentice Mage – Research Assistant</li>
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-gray-50 p-4 rounded-lg border space-y-4">
              <h4 className="font-bold text-gray-800">Bastion Tools</h4>
              <ul className="text-gray-600 list-disc ml-5">
                <li><span className="font-semibold text-purple-700">Turn Manager</span> – Run Bastion turns with automation.</li>
                <li><span className="font-semibold text-purple-700">Room Upgrades</span> – Track expansions and improvements.</li>
                <li><span className="font-semibold text-purple-700">Hireling Tasks</span> – Assign missions, quests, and downtime activities.</li>
                <li><span className="font-semibold text-purple-700">Resource Tracker</span> – Monitor gold, supplies, and magical items.</li>
                <li><span className="font-semibold text-purple-700">Comedic Vignettes</span> – “Office-style” random events with your hirelings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Chronix. All rights reserved.
      </footer>
    </main>
  );
}
