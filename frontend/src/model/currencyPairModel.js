export const currencies = [{ id: 'EUR', name: 'Euro' }, { id: 'USD', name: 'US Dollar' }];

export const get = () => fetch('/api/pairs')
  .then(response => response.json());

export const add = pair => fetch(
  '/api/pairs',
  {
    method: 'POST',
    body: JSON.stringify(pair),
    headers: {
      'Content-Type': 'application/json',
    },
  },
).then(response => response.json());

export const remove = pairId => fetch(
  `/api/pairs/${pairId}`,
  {
    method: 'DELETE',
  },
).then(response => response.json());
