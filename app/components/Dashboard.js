import React, { Component } from 'react'
import { ScrollView } from "react-native";
import Balance from './Dashboard/Balance'
import TransactionsList from './Dashboard/TransactionsList'

class Dashboard extends Component {
  render () {
    return (
      <ScrollView>
        <Balance />
        <TransactionsList />
      </ScrollView>
    )
  }
}

export default Dashboard