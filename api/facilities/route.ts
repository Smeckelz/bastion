import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const facilities = await prisma.facility.findMany({ include: { bastion: true } });
    return NextResponse.json(facilities);
  } catch {
    return NextResponse.json({ error: "Failed to fetch facilities" }, { status: 500 });
  }
}
