// FILE: app/api/orders/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.order.findMany({
    where: { bastionId },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, title, status } = await req.json();
  if (!bastionId || !title) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.order.create({
    data: { bastionId, title, status: status || "queued" },
  });
  return NextResponse.json(item);
}
