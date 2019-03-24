import React from 'react';
import PropTypes from 'prop-types';

const CurrencyPairList = (props) => {
  const { pairs, onCurrencyPairRemove } = props;
  return (
    <div>
      <ul>
        {pairs.map(pair => (
          <li key={pair.id}>
            <span>{pair.fromCurrency}</span>
            <span> =&gt; </span>
            <span>{pair.toCurrency}</span>
            <span> for amount </span>
            <span>{pair.amount}</span>
            <span> when exchange rate </span>
            <span>{pair.rate}</span>
            <span> is </span>
            <span>{pair.value}</span>
            <button type="submit" onClick={() => onCurrencyPairRemove(pair.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
CurrencyPairList.propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    fromCurrency: PropTypes.string,
    toCurrency: PropTypes.string,
    amount: PropTypes.number,
    rate: PropTypes.number,
    value: PropTypes.number,
  })).isRequired,
  onCurrencyPairRemove: PropTypes.func.isRequired,
};

export default CurrencyPairList;
