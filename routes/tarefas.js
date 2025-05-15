const express = require('express');
const router = express.Router();
const Tarefa = require('../models/Tarefa');

// Criar tarefa
router.post('/', async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// Listar tarefas
router.get('/', async (req, res) => {
  const tarefas = await Tarefa.findAll();
  res.json(tarefas);
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await Tarefa.update(req.body, { where: { id } });
  res.json({ mensagem: 'Tarefa atualizada' });
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Tarefa.destroy({ where: { id } });
  res.json({ mensagem: 'Tarefa deletada' });
});

module.exports = router;
