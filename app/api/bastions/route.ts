// app/api/bastions/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
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
