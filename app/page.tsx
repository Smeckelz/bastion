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
      <main className="h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="flex flex-1">
        {/* Left: Branding */}
        <div className="flex-1 flex flex-col justify-center px-16 py-20">
          <h1 className="text-5xl font-bold mb-6">Chronix Bastion Tracker</h1>
          <p className="text-lg text-zinc-400 max-w-xl mb-8">
            A campaign management tool built for Dungeon Masters. Track bastions,
            manage facilities, assign defenders, and keep events and turns
            organized — all in one simple dashboard.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-2xl">
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="font-semibold text-xl mb-2">🏰 Bastion Overview</h3>
              <p className="text-zinc-400 text-sm">
                View all of your bastions at a glance — facilities, defenders,
                and current status.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="font-semibold text-xl mb-2">⚒️ Facilities</h3>
              <p className="text-zinc-400 text-sm">
                Manage buildings, upgrades, and resources that shape your
                bastion’s growth.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="font-semibold text-xl mb-2">🛡️ Defenders</h3>
              <p className="text-zinc-400 text-sm">
                Track your defenders, assign tasks, and ensure your bastion is
                well protected.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="font-semibold text-xl mb-2">📜 Orders & Turns</h3>
              <p className="text-zinc-400 text-sm">
                Record orders, log events, and manage campaign turns with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Login */}
        <div className="w-full max-w-md flex items-center justify-center bg-zinc-900 border-l border-zinc-800">
          <div className="p-10 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
            <p className="text-zinc-400 mb-6">
              Sign in with Discord to access your Bastion Tracker dashboard.
            </p>
            <button
              onClick={() => signIn("discord")}
              className="w-full px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 font-medium transition"
            >
              Sign in with Discord
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
