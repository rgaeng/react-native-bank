import React, { Component } from 'react'
import { Button, ScrollView, View, Text, StyleSheet } from "react-native";
import { iOSUIKit, iOSColors } from 'react-native-typography';

import TransactionHeader from './Transaction/TransactionHeader';
import TransactionInfo from './Transaction/TransactionInfo';

class Transaction extends Component {
  render() {
    console.log(this.props);
    const { transaction } = this.props.navigation.state.params;
    return (
      <View>
        <TransactionHeader transaction={transaction} />
        <TransactionInfo transaction={transaction} />
      </View>
    );
  }
}

export default Transaction;
