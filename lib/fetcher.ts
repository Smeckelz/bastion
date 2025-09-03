// FILE: lib/fetcher.ts
export const jsonFetcher = (url: string) => fetch(url).then((r) => r.json());

export async function postJSON(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `POST ${url} failed`);
  }
  return res.json();
}
