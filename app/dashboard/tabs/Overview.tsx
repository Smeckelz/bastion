// FILE: app/dashboard/page.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

import OverviewTab from "./tabs/Overview";
import BastionsTab from "./tabs/Bastions";
import FacilitiesTab from "./tabs/Facilities";
import DefendersTab from "./tabs/Defenders";
import OrdersTab from "./tabs/Orders";
import EventsTab from "./tabs/Events";
import TurnsTab from "./tabs/Turns";
import LogsTab from "./tabs/Logs";

const tabs = ["Overview", "Bastions", "Facilities", "Defenders", "Orders", "Events", "Turns", "Logs"] as const;
type Tab = (typeof tabs)[number];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const { data: bastions, mutate: refreshBastions } = useSWR(session ? "/api/bastions" : null, jsonFetcher);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [newBastionName, setNewBastionName] = useState("");

  // loading/auth gate
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
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
          className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 font-medium"
        >
          Sign in with Discord
        </button>
      </main>
    );
  }

  // pick a selected bastion if available
  useEffect(() => {
    if (bastions?.length && selectedId === null) {
      setSelectedId(bastions[0].id);
    }
  }, [bastions, selectedId]);

  const selected = useMemo(
    () => (bastions?.length ? bastions.find((b: any) => b.id === selectedId) : null),
    [bastions, selectedId]
  );

  async function createBastion() {
    if (!newBastionName.trim()) return;
    await postJSON("/api/bastions", { name: newBastionName.trim() });
    setNewBastionName("");
    await refreshBastions();
  }

  return (
    <main className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="p-6 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between border-b border-zinc-800">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Chronix Bastion Tracker — Hello, {session.user?.name ?? "Adventurer"}</h1>
          <p className="text-zinc-400 text-sm">
            {bastions?.length ? `Bastions: ${bastions.length}` : "No bastions yet — create one to begin."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {bastions?.length ? (
            <select
              value={selectedId ?? ""}
              onChange={(e) => setSelectedId(Number(e.target.value))}
              className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded"
              title="Select Bastion"
            >
              {bastions.map((b: any) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          ) : null}
          <button onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 rounded bg-red-600 hover:bg-red-500">
            Sign out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-6 py-3 border-b border-zinc-800 bg-zinc-900">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === tab ? "bg-emerald-600 text-white" : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* If no bastions: force Create form regardless of tab */}
        {!bastions?.length ? (
          <div className="max-w-lg bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Create Your First Bastion</h2>
            <p className="text-zinc-400 mb-4">Name your stronghold to begin.</p>
            <div className="flex gap-2">
              <input
                value={newBastionName}
                onChange={(e) => setNewBastionName(e.target.value)}
                placeholder="Blackreach Bastion"
                className="flex-1 bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
              />
              <button onClick={createBastion} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
                Create
              </button>
            </div>
          </div>
        ) : (
          <>
            {activeTab === "Overview" && <OverviewTab bastion={selected} />}
            {activeTab === "Bastions" && (
              <BastionsTab
                bastions={bastions}
                selectedId={selectedId}
                onSelect={setSelectedId}
                refresh={refreshBastions}
              />
            )}
            {activeTab === "Facilities" && selected && <FacilitiesTab bastion={selected} />}
            {activeTab === "Defenders" && selected && <DefendersTab bastion={selected} />}
            {activeTab === "Orders" && selected && <OrdersTab bastion={selected} />}
            {activeTab === "Events" && selected && <EventsTab bastion={selected} />}
            {activeTab === "Turns" && selected && <TurnsTab bastion={selected} />}
            {activeTab === "Logs" && selected && <LogsTab bastion={selected} />}
          </>
        )}
      </div>
    </main>
  );
}
