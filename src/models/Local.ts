// src/models/Local.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Local {
  nome: string;
}

export const criarLocal = async (local: Local) => {
  return prisma.local.create({ data: local });
};

export const listarLocais = async () => {
  return prisma.local.findMany();
};
