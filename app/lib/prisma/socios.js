import { PrismaClient } from '@prisma/client'
const prisma=new PrismaClient();
export async function getSocios(){
    try {
        const socios=await prisma.socios.findMany()
        return {socios}
    } catch (error) {
        return {error}
    }
}

export async function createSocio(socio){
    try {
        const socioFromDB=await prisma.socios.create({data: socio })
        return {socio:socioFromDB}
    } catch (error) {
        return {error}
    }
}

export async function getSocioById(id){
    try {
        const socio=await prisma.socios.findUnique({where: {id}})
        return {socio}
    } catch (error) {
        return {error}
        
    }
}
