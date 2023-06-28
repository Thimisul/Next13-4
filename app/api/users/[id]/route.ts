import { User } from "@prisma/client";
import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";

//GET USER BY ID
export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await prisma.user.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(res);
}
//UPDATE USER BY ID
export async function PUT(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const {name,email,password} : Partial<User> = await request.json();
  const res = await prisma.user.update({
    where: { id: Number(id) },
    data: {name,email,password}
  });
  return NextResponse.json(res);
}
//DELETE USER BY ID
export async function DELETE(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await prisma.user.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: res });
}
