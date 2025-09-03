// FILE: app/dashboard/tabs/Bastions.tsx
"use client";

import { KeyedMutator } from "swr";

type Bastion = {
  id: number;
  name: string;
  createdAt?: string;
  // add any other fields you use
};

type Props = {
  bastions: Bastion[];
  selectedId: number | null;
  onSelect: (id: number | null) => void;
  refresh: KeyedMutator<any>;
};

export default function BastionsTab({
  bastions,
  selectedId,
  onSelect,
  refresh,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {bastions.map((b) => (
          <button
            key={b.id}
            onClick={() => onSelect(b.id)}
            className={`rounded-xl border p-3 text-left ${
              selectedId === b.id ? "border-purple-400" : "border-zinc-800/50"
            }`}
          >
            <div className="font-semibold">{b.name}</div>
            <div className="text-xs opacity-70">ID: {b.id}</div>
          </button>
        ))}
      </div>

      {/* Example action that can call refresh() after a POST */}
      {/* <button onClick={() => refresh()} className="rounded-lg border px-3 py-2">
        Refresh
      </button> */}
    </div>
  );
}
