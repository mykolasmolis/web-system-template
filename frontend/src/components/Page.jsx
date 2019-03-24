import React from 'react';
import CurrencyPairEditor from './CurrencyPairEditor';
import CurrencyPairList from './CurrencyPairList';
import * as currencyPairModel from '../model/currencyPairModel';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: currencyPairModel.currencies,
      pairs: [],
    };
    this.onCurrencyPairAdded = this.onCurrencyPairAdded.bind(this);
    this.onCurrencyPairRemoved = this.onCurrencyPairRemoved.bind(this);
  }

  componentDidMount() {
    currencyPairModel.get()
      .then(pairs => this.setState({ pairs }));
  }

  onCurrencyPairAdded(pair) {
    currencyPairModel.add(pair)
      .then(currencyPairModel.get)
      .then((pairs) => {
        this.setState({ pairs });
      });
  }

  onCurrencyPairRemoved(pairId) {
    currencyPairModel.remove(pairId)
      .then(currencyPairModel.get)
      .then((pairs) => {
        this.setState({ pairs });
      });
  }

  render() {
    const { currencies, pairs } = this.state;
    return (
      <div>
        <CurrencyPairEditor
          currencies={currencies}
          onCurrencyPairAdded={this.onCurrencyPairAdded}
        />
        <CurrencyPairList
          pairs={pairs}
          onCurrencyPairRemove={this.onCurrencyPairRemoved}
        />
      </div>
    );
  }
}
