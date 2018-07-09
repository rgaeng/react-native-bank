import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import TransactionHeader from './Transaction/TransactionHeader';
import TransactionInfo from './Transaction/TransactionInfo';

const Transaction = ({
  navigation: {
    state: {
      params: { transaction },
    },
  },
}) => (
  <View>
    <TransactionHeader transaction={transaction} />
    <TransactionInfo transaction={transaction} />
  </View>
);

Transaction.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        transaction: PropTypes.shape({
          status: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default Transaction;
