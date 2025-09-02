// FILE: app/api/turns/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.turn.findMany({
    where: { bastionId },
    orderBy: { number: "asc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, number } = await req.json();
  if (!bastionId || !number) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.turn.create({
    data: { bastionId, number: Number(number) },
  });
  return NextResponse.json(item);
}
