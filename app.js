const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API');
});

app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});