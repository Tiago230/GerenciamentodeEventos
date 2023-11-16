// src/controllers/LocalController.ts
import { Request, Response } from 'express';
import * as LocalModel from '../models/Local';

export const criarLocal = async (req: Request, res: Response) => {
  const local = req.body;

  try {
    const novoLocal = await LocalModel.criarLocal(local);
    res.status(201).json(novoLocal);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar local.' });
  }
};

export const listarLocais = async (req: Request, res: Response) => {
  try {
    const locais = await LocalModel.listarLocais();
    res.json(locais);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter locais.' });
  }
};
