# Currency Pair Rate
(!) Note that the description and implementation is partial (cut down version).

## Description
This is an example Currency Pair Rate system. It allows user to add currency pairs for amount and see their value change according to rate.

## Entity definition
Currency Pair:
- id - number (min: 1, max: JS number type length)
- fromCurrency - string (length: 3, e.g.: 'USD', 'EUR')
- toCurrency - string (length: 3, e.g.: 'USD', 'EUR')
- amount: number (min: 1, max: 1 000 000)
- rate: number (min: 0, max: 1000)
- value: number (min: 1, max: 1 000 000 000)

## API definition
- `GET /api/pairs` - get all user currency pairs
- `POST /api/pairs` - add new currency pair. Request body is Currency Pair entity.
  - `400` - when Currency Pair validation fails. Returns error in `joi` error format.
- `POST /api/pairs/{id}` - Removes Currency Pair with ID `{id}` 
  - `400` - when Currency Pair with ID `{id}` does not exist. Return body: `{ "error": "NOT_FOUND" }`

General errors:
- `500` - when server fails (i.e.: DB error, connection error)
- `400` - when user is not authorized. Return body: `{ "error": "UNAUTHORIZED" }`

## UI definition
https://wireframe.cc/aInUfU
