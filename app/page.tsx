"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

// Define all the dashboard tabs
const tabs = [
  "Overview",
  "Bastions",
  "Facilities",
  "Defenders",
  "Orders",
  "Events",
  "Turns",
  "Logs",
];

export default function LandingPage() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("Overview");
  const [data, setData] = useState<any>(null);

  // Fetch JSON from API when tab changes
  useEffect(() => {
    if (session && activeTab !== "Overview") {
      fetch(`/api/${activeTab.toLowerCase()}`)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => setData({ error: "Failed to load data" }));
    }
  }, [activeTab, session]);

  // Loading state
  if (status === "loading") {
    return (
      <main className="h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
        <p>Loading...</p>
      </main>
    );
  }

  // Not signed in → landing/login
  if (!session) {
    return (
      <main className="h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 space-y-4">
        <h1 className="text-3xl font-bold">
          Welcome to Chronix Bastion Tracker
        </h1>
        <button
          onClick={() => signIn("discord")}
          className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 font-medium"
        >
          Sign in with Discord
        </button>
      </main>
    );
  }

  // Signed in → dashboard with tabbed UI
  return (
    <main className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-2xl font-bold">
          Chronix Bastion Tracker — Hello, {session.user?.name}
        </h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-500"
        >
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-6 py-3 border-b border-zinc-800 bg-zinc-900">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setData(null);
            }}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === tab
                ? "bg-emerald-600 text-white"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === "Overview" ? (
          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-zinc-300">
              Welcome, {session.user?.name}. Select a tab above to view your
              Bastion data.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-2">{activeTab}</h2>
            <pre className="bg-zinc-900 p-4 rounded text-sm overflow-x-auto">
              {data ? JSON.stringify(data, null, 2) : "Loading..."}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
