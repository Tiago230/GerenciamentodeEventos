// src/models/Categoria.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Categoria {
  nome: string;
}

export const criarCategoria = async (categoria: Categoria) => {
  return prisma.categoria.create({ data: categoria });
};

export const listarCategorias = async () => {
  return prisma.categoria.findMany();
};
