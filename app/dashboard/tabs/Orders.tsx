// FILE: app/dashboard/tabs/Orders.tsx
"use client";
import useSWR from "swr";
import { useState } from "react";
import { jsonFetcher, postJSON } from "@/lib/fetcher";

export default function OrdersTab({ bastion }: { bastion: any }) {
  const { data, mutate } = useSWR(`/api/orders?bastionId=${bastion.id}`, jsonFetcher);
  const [title, setTitle] = useState("");

  async function add() {
    if (!title.trim()) return;
    await postJSON("/api/orders", { bastionId: bastion.id, title: title.trim() });
    setTitle("");
    mutate();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Orders — {bastion.name}</h2>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Queue Order</h3>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-zinc-950 border border-zinc-700 px-3 py-2 rounded"
            placeholder="Order title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={add} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">
            Add
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Order List</h3>
        <ul className="space-y-2">
          {data?.map((o: any) => (
            <li key={o.id} className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded">
              {o.title} <span className="text-xs text-zinc-400">[{o.status}]</span>
            </li>
          )) || <p className="text-zinc-400">No orders yet.</p>}
        </ul>
      </div>
    </section>
  );
}
