import React from 'react';
import { ScrollView } from 'react-native';
import Balance from './Balance';
import TransactionsList from './TransactionsList';

import Layout from '../Layout';

export default () => (
  <Layout>
    <ScrollView>
      <Balance />
      <TransactionsList />
    </ScrollView>
  </Layout>
);
