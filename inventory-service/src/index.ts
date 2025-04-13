import express from 'express';

const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Inventory Service çalışıyor');
});

app.listen(PORT, () => {
  console.log(`Inventory Service port ${PORT} üzerinde çalışıyor`);
});