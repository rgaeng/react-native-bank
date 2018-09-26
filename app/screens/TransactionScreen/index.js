import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import TransactionHeader from './TransactionHeader';
import TransactionInfo from './TransactionInfo';
import Layout from '../Layout';

const TransactionScreen = ({
  navigation: {
    state: {
      params: { transaction },
    },
  },
}) => (
  <Layout>
    <View>
      <TransactionHeader transaction={transaction} />
      <TransactionInfo transaction={transaction} />
    </View>
  </Layout>
);

TransactionScreen.propTypes = {
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

export default TransactionScreen;
