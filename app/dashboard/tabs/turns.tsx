"use client";

import { useEffect, useState } from "react";

export default function TurnsTab() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/turns")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData({ error: "Failed to load turns" }));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Turns</h2>
      <pre className="bg-zinc-900 p-4 rounded text-sm overflow-x-auto">
        {data ? JSON.stringify(data, null, 2) : "Loading..."}
      </pre>
    </div>
  );
}
