// FILE: app/dashboard/tabs/Facilities.tsx
"use client";
import useSWR from "swr";
import { useState } from "react";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

export default function FacilitiesTab({ bastion }: { bastion: any }) {
  const { data, mutate } = useSWR(`/api/facilities?bastionId=${bastion.id}`, jsonFetcher);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  async function create() {
    if (!name.trim()) return;
    await postJSON("/api/facilities", { bastionId: bastion.id, name: name.trim(), level: Number(level) });
    setName("");
    setLevel(1);
    mutate();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Facilities — {bastion.name}</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Add Facility</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            className="bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            placeholder="Name (e.g., War Room)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            type="number"
            min={1}
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value || "1", 10))}
          />
          <button onClick={create} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Add
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">List</h3>
        <ul className="space-y-2">
          {data?.map((f: any) => (
            <li key={f.id} className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded">
              {f.name} — Level {f.level}
            </li>
          )) || <p className="text-zinc-400">No facilities yet.</p>}
        </ul>
      </div>
    </section>
  );
}
