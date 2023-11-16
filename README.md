# Plataforma-Gerenciamento-de-Eventos-Cultarais-Avanti.
# Plataforma de Gerenciamento de Eventos 
Bem vindo a plataforma para gerenciamento de eventos, a plataforma permitirá que os organizadores de eventos criem e listem eventos, enquanto os participantes podem explorar, pesquisar e filtrar eventos com base em categorias, locais e datas.

# Pré-requisitos
Verificar se tem o Node.js e o PostgreSQL instalados em sua máquina.

# Instalação
1. Clone este repositório
2. Instale as dependências:  npm install
3. Configure o seu banco de dados: 
3.1 Crie o banco de dados no POstgresSQL.
3.2 No arquivo .env , preencha o DATABASE_URL com suas configurações de banco de dados "DATABASE_URL="postgresql://postgres:@localhost:5432/mydb?schema=public"
4. Execute a migração do Prisma para criar as tabelas: ultilize o comando "npx prima migrate dev"
5. Antes de iniciar o servidor ultize o comando "npx prisma generate"
6. inicie o servidor: npm run dev

#CRUD 
Ultizando o Postman

CATEGORIAS:
.Criar Categoria: 
   - Método: POST
     URL: http://localhost:4002/categorias
     Body (JSON): {
                      "nome": "Dança"
     }
     
.Listar Categorias:
   -Método: GET
   URL: http://localhost:4002/categorias

LOCAIS:
.Criar Local:
    -Método: POST
     URL: http://localhost:4002/locais
     Body (JSON):{
              "nome": "Teatro A"
     }
     
.Listar Locais: 
    -Método: GET
     URL: http://localhost:4002/locais

EVENTOS
.Criar Evento:
    -Método:POST
     URL: http://localhost:4002/eventos
     Body (JSON):{
             "nome": "Show de Música",
             "data": "2022-01-15T18:30:00Z",
             "descricao": "Um  show de Música",
             "categoriaId": 1,
             "localId": 1
     }

.Listar Eventos:
    -Método:GET
     URL: http://localhost:4002/eventos

.Atualizar Eventos:
    -Método:PUT
     http://localhost:4002/eventos/1 (Imaginando que já exista o evento com o ID 1)
     Body (JSON):{
             "nome": "Show de Música Atualizado",
             "data": "2023-11-15T20:00:00Z",
             "descricao": "Uma show de música nova",
             "categoriaId": 1,
             "localId": 1
    }

.Deletar Evento:
     -Método: DELETE
      URL: http://localhost:4002/eventos/1 (imaginando que já exista o evento com o ID 1)
