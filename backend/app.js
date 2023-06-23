const express = require('express');
const app = express();
const studentRoutes = require('./routes/student');

app.use(express.json());
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(3080, () => {
  console.log('Servidor rodando na porta 3080');
});