
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

export async function GET(
  request,
  { params }
) {
  const ID =parseInt(params.id);
  
  console.log(ID)
  const socio = await prisma.socios.findUnique({
    where: {
      ID,
    },
  });
  console.log(socio)
  if (!socio) {
    return new NextResponse("ID de socio no encontrado", { status: 404 });
  }

  return NextResponse.json(socio); 
}

  export async function PATCH(
    request,
    { params }
    ) {
  const ID =parseInt( params.id);
  let json = await request.json();

  const updated_socio = await prisma.socios.update({
    where: { ID },
    data: json,
  });
  if (!updated_socio) {
    return new NextResponse("ID socio no encontrado", { status: 404 });
  }

  return NextResponse.json(updated_socio);
}

  export async function DELETE(
    request,
    { params }
    ) {
        try {
        const ID =parseInt(params.id);
      
        await prisma.socios.delete({
        where: { ID },
      });
  
      return new NextResponse(null, { status: 204 });
    } catch (error) {
      if (error.code === "P2025") {
        return new NextResponse("ID socio no encontrado", { status: 404 });
      }
  
      return new NextResponse(error.message, { status: 500 });
    }
  }