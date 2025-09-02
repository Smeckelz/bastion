// FILE: app/dashboard/tabs/Turns.tsx
"use client";
import useSWR from "swr";
import { useState } from "react";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

export default function TurnsTab({ bastion }: { bastion: any }) {
  const { data, mutate } = useSWR(`/api/turns?bastionId=${bastion.id}`, jsonFetcher);
  const [number, setNumber] = useState<number>( (data?.length || 0) + 1 );

  async function add() {
    if (!number) return;
    await postJSON("/api/turns", { bastionId: bastion.id, number });
    setNumber((n) => n + 1);
    mutate();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Turns — {bastion.name}</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Advance Turn</h3>
        <div className="flex gap-2">
          <input
            type="number"
            className="w-32 bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value || "1", 10))}
            min={1}
          />
          <button onClick={add} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Add Turn
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">History</h3>
        <ul className="space-y-2">
          {data?.map((t: any) => (
            <li key={t.id} className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded">
              Turn {t.number} — {t.resolved ? "Resolved" : "Pending"}
            </li>
          )) || <p className="text-zinc-400">No turns yet.</p>}
        </ul>
      </div>
    </section>
  );
}
