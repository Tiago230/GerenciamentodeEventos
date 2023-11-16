// src/models/Evento.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Evento {
  nome: string;
  data: Date;
  descricao: string;
  categoriaId: number;
  localId: number;
}

export const criarEvento = async (evento: Evento) => {
  return prisma.evento.create({ data: evento });
};

export const listarEventos = async () => {
  return prisma.evento.findMany();
};

export const atualizarEvento = async (id: number, evento: Evento) => {
  return prisma.evento.update({ where: { id }, data: evento });
};

export const deletarEvento = async (id: number) => {
  return prisma.evento.delete({ where: { id } });
};
