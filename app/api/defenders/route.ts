// FILE: app/api/defenders/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bastionId = Number(searchParams.get("bastionId"));
  if (!bastionId) return NextResponse.json([]);

  const items = await prisma.defender.findMany({
    where: { bastionId },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { bastionId, name, role } = await req.json();
  if (!bastionId || !name) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const item = await prisma.defender.create({
    data: { bastionId, name, role: role || null },
  });
  return NextResponse.json(item);
}
