import React from 'react';
import { ScrollView } from 'react-native';
import Balance from './Dashboard/Balance';
import TransactionsList from './Dashboard/TransactionsList';

export default () => (
  <ScrollView>
    <Balance />
    <TransactionsList />
  </ScrollView>
);
