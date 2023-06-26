import { PrismaClient } from "@prisma/client";
import { NextResponse,NextRequest } from "next/server";

const prisma=new PrismaClient()


export async function GET(res) {
  console.log("listando socios")
  const socios = await prisma.socios.findMany()

  return NextResponse.json(socios);
}

export async function POST(req,res) {
  try {
    console.log('Añadiendo socio')
    const json = await req.json();

    console.log(json)

    const socio = await prisma.socios.create({
      data: json,
    });
    console.log(socio)
    return new NextResponse(JSON.stringify(socio), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
} 