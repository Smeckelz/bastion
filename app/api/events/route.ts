// FILE: app/api/events/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.event.findMany({
    where: { bastionId },
    orderBy: { occurredAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, title } = await req.json();
  if (!bastionId || !title) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.event.create({
    data: { bastionId, title },
  });
  return NextResponse.json(item);
}
