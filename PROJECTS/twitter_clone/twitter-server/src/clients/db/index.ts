import { PrismaClient } from '@prisma/client'

export const prismaCient = new PrismaClient({ log: ['query'] })
