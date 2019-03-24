import React, { useState, useEffect } from 'react';
import CurrencyPairEditor from './CurrencyPairEditor';
import CurrencyPairList from './CurrencyPairList';
import * as currencyPairModel from '../model/currencyPairModel';

export default () => {
  const [currencies] = useState(currencyPairModel.currencies);
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    currencyPairModel.get().then(setPairs);
  });

  const onCurrencyPairAdded = (pair) => {
    currencyPairModel.add(pair)
      .then(currencyPairModel.get)
      .then(setPairs);
  };

  const onCurrencyPairRemoved = (pairId) => {
    currencyPairModel.remove(pairId)
      .then(currencyPairModel.get)
      .then(setPairs);
  };

  return (
    <div>
      <CurrencyPairEditor
        currencies={currencies}
        onCurrencyPairAdded={onCurrencyPairAdded}
      />
      <CurrencyPairList
        pairs={pairs}
        onCurrencyPairRemove={onCurrencyPairRemoved}
      />
    </div>
  );
};
