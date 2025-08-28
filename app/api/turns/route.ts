import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const turns = await prisma.turn.findMany({ include: { bastion: true } });
    return NextResponse.json(turns);
  } catch {
    return NextResponse.json({ error: "Failed to fetch turns" }, { status: 500 });
  }
}
