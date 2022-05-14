const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('okay');
});

app.listen(process.env.PORT, () => {
  console.log('Escutando na porta 3000');
});
