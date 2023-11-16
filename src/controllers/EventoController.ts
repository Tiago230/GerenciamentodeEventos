// src/controllers/EventoController.ts
import { Request, Response } from 'express';
import * as EventoModel from '../models/Evento';

export const criarEvento = async (req: Request, res: Response) => {
  const evento = req.body;

  try {
    const novoEvento = await EventoModel.criarEvento(evento);
    res.status(201).json(novoEvento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar evento.' });
  }
};

export const listarEventos = async (req: Request, res: Response) => {
  try {
    const eventos = await EventoModel.listarEventos();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter eventos.' });
  }
};

export const atualizarEvento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const evento = req.body;

  try {
    const eventoAtualizado = await EventoModel.atualizarEvento(parseInt(id), evento);
    res.json(eventoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar evento.' });
  }
};

export const deletarEvento = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const eventoDeletado = await EventoModel.deletarEvento(parseInt(id));
    res.json(eventoDeletado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar evento.' });
  }
};
