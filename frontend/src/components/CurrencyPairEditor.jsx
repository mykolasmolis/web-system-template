import React from 'react';
import PropTypes from 'prop-types';

export default class CurrencyPairEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      amount: 0,
    };
    this.onFromCurrencyChange = this.onFromCurrencyChange.bind(this);
    this.onToCurrencyChange = this.onToCurrencyChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onFromCurrencyChange(event) {
    this.setState({ fromCurrency: event.target.value });
  }

  onToCurrencyChange(event) {
    this.setState({ toCurrency: event.target.value });
  }

  onAmountChange(event) {
    this.setState({ amount: parseFloat(event.target.value) });
  }

  onAddClick() {
    const { fromCurrency, toCurrency, amount } = this.state;
    const pair = {
      fromCurrency,
      toCurrency,
      amount,
      rate: null,
      value: null,
    };
    const { onCurrencyPairAdded } = this.props;
    onCurrencyPairAdded(pair);
  }

  render() {
    const { currencies } = this.props;
    const { fromCurrency, toCurrency, amount } = this.state;
    return (
      <div>
        <div>Add currency pair</div>
        <span>From currency</span>
        <select onChange={this.onFromCurrencyChange} value={fromCurrency}>
          {currencies.map(currency => (
            <option key={currency.id} value={currency.id}>{currency.name}</option>
          ))}
        </select>
        <span>To currency</span>
        <select onChange={this.onToCurrencyChange} value={toCurrency}>
          {currencies.map(currency => (
            <option key={currency.id} value={currency.id}>{currency.name}</option>
          ))}
        </select>
        <span>Amount</span>
        <input style={{ width: 60 }} type="number" value={amount} onChange={this.onAmountChange} />
        <button type="submit" onClick={this.onAddClick}>Add</button>
      </div>
    );
  }
}

CurrencyPairEditor.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  onCurrencyPairAdded: PropTypes.func.isRequired,
};
