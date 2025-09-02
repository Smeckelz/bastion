// FILE: app/dashboard/tabs/Defenders.tsx
"use client";
import useSWR from "swr";
import { useState } from "react";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

export default function DefendersTab({ bastion }: { bastion: any }) {
  const { data, mutate } = useSWR(`/api/defenders?bastionId=${bastion.id}`, jsonFetcher);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  async function add() {
    if (!name.trim()) return;
    await postJSON("/api/defenders", { bastionId: bastion.id, name: name.trim(), role });
    setName("");
    setRole("");
    mutate();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Defenders — {bastion.name}</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Recruit</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            className="bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            placeholder="Role (Scout, Guard...)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button onClick={add} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Add
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Roster</h3>
        <ul className="space-y-2">
          {data?.map((d: any) => (
            <li key={d.id} className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded">
              {d.name} {d.role ? <span className="text-zinc-400">— {d.role}</span> : null}
            </li>
          )) || <p className="text-zinc-400">No defenders yet.</p>}
        </ul>
      </div>
    </section>
  );
}
