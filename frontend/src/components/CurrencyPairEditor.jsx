import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CurrencyPairEditor = (props) => {
  const { currencies, onCurrencyPairAdded } = props;

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(0);

  const onAddClick = () => {
    onCurrencyPairAdded({
      fromCurrency,
      toCurrency,
      amount,
      rate: null,
      value: null,
    });
  };

  return (
    <div>
      <div>Add currency pair</div>
      <span>From currency</span>
      <select onChange={event => setFromCurrency(event.target.value)} value={fromCurrency}>
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>{currency.name}</option>
        ))}
      </select>
      <span>To currency</span>
      <select onChange={event => setToCurrency(event.target.value)} value={toCurrency}>
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>{currency.name}</option>
        ))}
      </select>
      <span>Amount</span>
      <input style={{ width: 60 }} type="number" value={amount} onChange={event => setAmount(parseFloat(event.target.value))} />
      <button type="submit" onClick={onAddClick}>Add</button>
    </div>
  );
};

CurrencyPairEditor.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  onCurrencyPairAdded: PropTypes.func.isRequired,
};

export default CurrencyPairEditor;
