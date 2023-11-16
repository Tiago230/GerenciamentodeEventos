// src/controllers/CategoriaController.ts
import { Request, Response } from 'express';
import * as CategoriaModel from '../models/Categoria';

export const criarCategoria = async (req: Request, res: Response) => {
  const categoria = req.body;

  try {
    const novaCategoria = await CategoriaModel.criarCategoria(categoria);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria.' });
  }
};

export const listarCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await CategoriaModel.listarCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter categorias.' });
  }
};