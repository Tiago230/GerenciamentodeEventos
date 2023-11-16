// Importando as dependências necessárias
import express from 'express';
import router  from './routes';

// Configurando o servidor Express
const app = express();

// Adicionando middleware para analisar JSON
app.use(express.json());

// Adicionando as rotas definidas no arquivo routes.ts
app.use(router);

// Configurando a porta do servidor
const PORT = process.env.PORT || 4002;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
