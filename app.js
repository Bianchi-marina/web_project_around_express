require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/aroundb').then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

app.use((req, res, next) => {
  req.user = {
    _id: '65fdfcc099ebcc1d70a78749'
  };
  next();
});

app.use(express.json());
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API do Projeto Around da TripleTen');
});

app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});