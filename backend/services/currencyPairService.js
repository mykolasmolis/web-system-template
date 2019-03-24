const app = require('../app');

let id = 3;

const pairs = [
  {
    id: 1, fromCurrency: 'USD', toCurrency: 'EUR', amount: 987, rate: 0.8, value: 987 * 0.8,
  },
  {
    id: 2, fromCurrency: 'EUR', toCurrency: 'USD', amount: 123, rate: 1.2, value: 123 * 1.2,
  },
];

app.get('/api/pairs', (_req, res) => {
  res.send(pairs);
});

app.post('/api/pairs', (req, res) => {
  id += 1;
  req.body.id = id;
  pairs.push(req.body);
  res.send(req.body);
});

app.delete('/api/pairs/:id', (req, res) => {
  const pairId = parseInt(req.params.id, 10);
  const index = pairs.findIndex(pair => pair.id === pairId);
  const removedPair = pairs[index];
  pairs.splice(index, 1);
  res.send(removedPair);
});
