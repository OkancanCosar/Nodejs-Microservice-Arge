import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Order Service çalışıyor');
});


app.get('/orders2', (_req, res) => {
  res.json([
    { id: 1, product: 'Laptop', quantity: 2 },
    { id: 2, product: 'Phone', quantity: 1 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Order Service port ${PORT} üzerinde çalışıyor`);
});