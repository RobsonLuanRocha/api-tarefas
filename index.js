const express = require('express');
const app = express();
const sequelize = require('./config/database');
const tarefasRoutes = require('./routes/tarefas');

app.use(express.json());
app.use('/tarefas', tarefasRoutes);

// Sincroniza com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});
