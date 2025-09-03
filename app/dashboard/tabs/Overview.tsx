// FILE: app/dashboard/tabs/Overview.tsx
export default function OverviewTab({ bastion }: { bastion: any }) {
  if (!bastion) {
    return <div className="text-zinc-300">No bastion selected.</div>;
  }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Overview</h2>
      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded">
        <p className="text-zinc-300">
          <span className="font-semibold">Bastion:</span> {bastion.name}
        </p>
        <p className="text-zinc-400 text-sm">
          ID: {bastion.id} • Created: {new Date(bastion.createdAt ?? Date.now()).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
