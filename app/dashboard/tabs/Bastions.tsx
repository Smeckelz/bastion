// FILE: app/dashboard/tabs/Bastions.tsx
"use client";
import { useState } from "react";
import { postJSON } from "@/lib/fetcher";

export default function BastionsTab({
  bastions,
  selectedId,
  onSelect,
  refresh,
}: {
  bastions: any[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  refresh: () => Promise<any>;
}) {
  const [name, setName] = useState("");

  async function create() {
    if (!name.trim()) return;
    await postJSON("/api/bastions", { name: name.trim() });
    setName("");
    await refresh();
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Bastions</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Create Bastion</h3>
        <div className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New Bastion Name"
            className="flex-1 bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
          />
          <button onClick={create} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Create
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Your Bastions</h3>
        <ul className="space-y-2">
          {bastions.map((b) => (
            <li
              key={b.id}
              className={`flex items-center justify-between bg-zinc-950 border border-zinc-800 px-3 py-2 rounded ${
                selectedId === b.id ? "ring-2 ring-emerald-600" : ""
              }`}
            >
              <span>{b.name}</span>
              <button
                onClick={() => onSelect(b.id)}
                className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-sm"
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
