// FILE: app/api/facilities/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.facility.findMany({
    where: { bastionId },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, name, level } = await req.json();
  if (!bastionId || !name) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.facility.create({
    data: { bastionId, name, level: Number(level) || 1 },
  });
  return NextResponse.json(item);
}
