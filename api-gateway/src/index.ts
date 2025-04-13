import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
    res.send('API Gateway çalışıyor (TypeScript)');
});

app.get('/api/orders', async (_req, res) => {
    try {
        const response = await axios.get('http://order-service:3001/orders');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Order Service ulaşılamıyor' });
    }
});

app.get('/api/orders2', async (_req, res) => {
    try {
        const response = await axios.get('http://order-service:3001/orders2');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Order Service ulaşılamıyor' });
    }
});


app.listen(PORT, () => {
    console.log(`API Gateway port ${PORT} üzerinde çalışıyor`);
});