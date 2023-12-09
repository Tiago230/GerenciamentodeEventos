// Importando as dependências necessárias
import express from 'express';
import router from './routes';
// Importe o pacote cors
import cors from 'cors';

// Configurando o servidor Express
const app = express();

// Adicionando middleware para analisar JSON
app.use(express.json());

// Adicione o middleware CORS após a criação do aplicativo
app.use(cors());

// Adicione as rotas
app.use(router);

// Configurando a porta do servidor
const PORT = process.env.PORT || 4002;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
