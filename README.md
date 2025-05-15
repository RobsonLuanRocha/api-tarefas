# API de Tarefas

Este é um projeto de uma API REST para gerenciamento de tarefas, desenvolvida com Node.js, Express e SQLite.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- SQLite
- Nodemon (para desenvolvimento)

## 📁 Estrutura de Pastas

api-tarefas/
├── config/
│ └── database.js # Configuração do banco de dados
├── models/
│ └── Tarefa.js # Modelo da tarefa
├── routes/
│ └── tarefas.js # Rotas da API
├── index.js # Arquivo principal da aplicação
└── package.json

## ⚙️ Como Executar

1. Clone o repositório:

git clone https://github.com/seu-usuario/api-tarefas.git
cd api-tarefas

Instale as dependências:
npm install

Inicie o servidor com o nodemon:
npm run dev

O servidor estará disponível em: http://localhost:3000

🧪 Testando com Postman
Criar tarefa
POST /tarefas

Body (JSON):

json
Copiar
Editar
{
  "titulo": "Estudar Node.js",
  "concluida": false
}
Listar tarefas
GET /tarefas

Atualizar tarefa
PUT /tarefas/:id

Deletar tarefa
DELETE /tarefas/:id

📌 Observações
O banco de dados SQLite será criado automaticamente na raiz do projeto ao rodar o servidor.

O diretório node_modules/ está ignorado no .gitignore.
