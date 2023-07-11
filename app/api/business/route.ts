import { prisma } from "@/lib/prisma";
import { Business } from "@prisma/client";
import { NextResponse } from "next/server";

//GET ALL BUSINESS
export async function GET(request: Request) {
  const business = await prisma.business.findMany({
    include:{
      userOwner: {
        select: {
          name: true,
        }
      },
      usersParticipations: {
        include: {
          user: true
        }
      },
      businessOwner: true,
      businessDependents: true,
    }
  });
  return NextResponse.json(business);
}
//CREATE BUSINESS
export async function POST(request: Request) {
  try {
    const {name,initialValue,businessId, userOwnerId}: Business = await request.json();
    const userCreated = await prisma.business.create({
      data: {name,initialValue,businessId,userOwnerId},
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

