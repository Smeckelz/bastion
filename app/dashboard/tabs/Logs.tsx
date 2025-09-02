// FILE: app/dashboard/tabs/Logs.tsx
"use client";
import useSWR from "swr";
import { useState } from "react";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

export default function LogsTab({ bastion }: { bastion: any }) {
  const { data, mutate } = useSWR(`/api/logs?bastionId=${bastion.id}`, jsonFetcher);
  const [message, setMessage] = useState("");

  async function add() {
    if (!message.trim()) return;
    await postJSON("/api/logs", { bastionId: bastion.id, message: message.trim() });
    setMessage("");
    mutate();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Logs — {bastion.name}</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Write Log</h3>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            placeholder="Message…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={add} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Add
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Recent</h3>
        <ul className="space-y-2">
          {data?.map((l: any) => (
            <li key={l.id} className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded">
              <div>{l.message}</div>
              <div className="text-xs text-zinc-400">{new Date(l.createdAt).toLocaleString()}</div>
            </li>
          )) || <p className="text-zinc-400">No logs yet.</p>}
        </ul>
      </div>
    </section>
  );
}
