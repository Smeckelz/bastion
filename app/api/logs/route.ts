// FILE: app/api/logs/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.log.findMany({
    where: { bastionId },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, message } = await req.json();
  if (!bastionId || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.log.create({
    data: { bastionId, message },
  });
  return NextResponse.json(item);
}
