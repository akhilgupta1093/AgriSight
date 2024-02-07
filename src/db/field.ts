import prisma from './prismaClient';

export const createField = async (name: string, fieldId: number) => {
  return await prisma.field.create({
    data: {
        name,
        fieldId
    }
  })
}

export const getField = async (fieldId: number) => {
  return await prisma.field.findFirst({
    where: {
      fieldId
    }
  })
}

export const getFields = async () => {
  return await prisma.field.findMany()
}