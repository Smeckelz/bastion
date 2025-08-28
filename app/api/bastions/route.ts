import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const bastions = await prisma.bastion.findMany({
      include: { facilities: true, defenders: true, orders: true, events: true, turns: true, logs: true },
    });
    return NextResponse.json(bastions);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch bastions" }, { status: 500 });
  }
}
