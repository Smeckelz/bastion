"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LandingPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
        <p>Loading...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 space-y-4">
        <h1 className="text-3xl font-bold">Welcome to Chronix Bastion Tracker</h1>
        <button
          onClick={() => signIn("discord")}
          className="px-6 py-3 rounded b-emerald-600 hover:bg-emerald-500 font-medium"
        >
          Sign in with Discord
        </button>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 space-y-4">
      <h1 className="text-3xl font-bold">Hello, {session.user?.name}</h1>
      <p>You are signed in with Discord 🎉</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 rounded bg-red-600 hover:bg-red-500"
      >
        Sign out
      </button>
    </main>
  );
}
