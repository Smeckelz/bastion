"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If already logged in → redirect to dashboard
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <main className="h-screen flex items-center justify-center bg-[#0b0b12] text-zinc-100">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0b12] via-[#1c1c29] to-black text-zinc-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        {/* Logo */}
        <img src="/logo.png" alt="Chronix Logo" className="h-32 w-auto mb-6" />

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Track and Manage Your Bastions with Ease
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-400 max-w-2xl mb-10">
          Chronix is your all-in-one Bastion Tracker for Dungeon Masters. Manage
          facilities, defenders, orders, turns, and campaign events — all in a
          sleek, organized dashboard.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => signIn("discord")}
          className="px-8 py-4 rounded bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 font-medium transition shadow-lg"
        >
          Sign in with Discord
        </button>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">🏰 Bastion Overview</h3>
          <p className="text-zinc-400">
            See every bastion at a glance — track status, resources, and key
            details in one place.
          </p>
        </div>
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">⚒️ Facilities</h3>
          <p className="text-zinc-400">
            Manage your buildings and upgrades. Plan your stronghold’s growth
            and maximize efficiency.
          </p>
        </div>
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">🛡️ Defenders</h3>
          <p className="text-zinc-400">
            Track defenders and assign tasks to keep your bastion safe from
            threats.
          </p>
        </div>
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">📜 Orders</h3>
          <p className="text-zinc-400">
            Record player and DM orders, ensuring nothing gets lost between
            turns.
          </p>
        </div>
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">⏳ Turns</h3>
          <p className="text-zinc-400">
            Keep campaigns flowing smoothly by managing turns and tracking time
            across bastions.
          </p>
        </div>
        <div className="p-6 bg-[#1c1c29]/80 backdrop-blur-md rounded-xl border border-purple-700/50 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">📖 Logs & Events</h3>
          <p className="text-zinc-400">
            Chronicle every order, defender action, and event with permanent
            logs for your campaign history.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Ready to Command Your Bastions?
        </h2>
        <p className="text-zinc-400 mb-6">
          Sign in with Discord and bring order to your campaign today.
        </p>
        <button
          onClick={() => signIn("discord")}
          className="px-8 py-4 rounded bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 font-medium transition shadow-lg"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}
