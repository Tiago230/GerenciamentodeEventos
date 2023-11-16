// src/routes/index.ts
import express from 'express';
import * as EventoController from '../controllers/EventoController';
import * as CategoriaController from '../controllers/CategoriaController';
import * as LocalController from '../controllers/LocalController';

const router = express.Router();

// Rotas CRUD para Eventos
router.post('/eventos', EventoController.criarEvento);
router.get('/eventos', EventoController.listarEventos);
router.put('/eventos/:id', EventoController.atualizarEvento);
router.delete('/eventos/:id', EventoController.deletarEvento);

// Rotas CRUD para Categorias
router.post('/categorias', CategoriaController.criarCategoria);
router.get('/categorias', CategoriaController.listarCategorias);

// Rotas CRUD para Locais
router.post('/locais', LocalController.criarLocal);
router.get('/locais', LocalController.listarLocais);

export default router;
