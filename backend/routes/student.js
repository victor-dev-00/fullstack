const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Rota para criar um novo aluno

router.post('/', async (req, res) => {
  try {
    const { name, email, ra, cpf } = req.body;
    const student = await Student.create({ name, email, ra, cpf });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o aluno' });
  }
});

module.exports = router;