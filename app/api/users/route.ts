import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

//GET ALL USERS
export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
//CREATE USER
export async function POST(request: Request) {
  try {
    const {name,email,password}: User = await request.json();
    const userCreated = await prisma.user.create({
      data: {name,email,password},
    });
    return new NextResponse(JSON.stringify(userCreated), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}

