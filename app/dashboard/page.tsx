// FILE: app/dashboard/page.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

// Import tab components
import OverviewTab from "./tabs/Overview";
import BastionsTab from "./tabs/Bastions";
import FacilitiesTab from "./tabs/Facilities";
import DefendersTab from "./tabs/Defenders";
import OrdersTab from "./tabs/Orders";
import EventsTab from "./tabs/Events";
import TurnsTab from "./tabs/Turns";
import LogsTab from "./tabs/Logs";

// List of tabs
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

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState<string>("Overview");

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
        <h1 className="text-3xl font-bold">Welcome to Chronix Bastion Tracker</h1>
        <button
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
          className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 font-medium"
        >
          Sign in with Discord
        </button>
      </main>
    );
  }

  // Signed in → dashboard
  return (
    <main className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-2xl font-bold">
          Chronix Bastion Tracker — Hello, {session.user?.name ?? "Adventurer"}
        </h1>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
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
            onClick={() => setActiveTab(tab)}
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
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Bastions" && <BastionsTab />}
        {activeTab === "Facilities" && <FacilitiesTab />}
        {activeTab === "Defenders" && <DefendersTab />}
        {activeTab === "Orders" && <OrdersTab />}
        {activeTab === "Events" && <EventsTab />}
        {activeTab === "Turns" && <TurnsTab />}
        {activeTab === "Logs" && <LogsTab />}
      </div>
    </main>
  );
}
