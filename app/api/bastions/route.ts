// FILE: app/api/bastions/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";   // <-- use alias, not "../../lib/auth"
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json([]);

  const bastions = await prisma.bastion.findMany({
    where: { ownerId: session.user.id },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(bastions);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name } = await req.json();
  if (!name || name.length < 3) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }

  const bastion = await prisma.bastion.create({
    data: { name, ownerId: session.user.id },
  });
  return NextResponse.json(bastion);
}
