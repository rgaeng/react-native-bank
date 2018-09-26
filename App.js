/* eslint-disable import/first,import/order,react/prefer-stateless-function */

import 'es6-symbol/implement';
import './debugging';

import React, { Component } from 'react';
import { Button, View, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Dashboard from './app/components/Dashboard';
import Cards from './app/components/Cards/Cards';
import Payments from './app/components/Payments/Payments';
import Transaction from './app/components/Transaction';
import Insights from './app/components/Insights';
import Accounts from './app/components/Accounts';
import SendMoney from './app/components/SendMoney';
import TouchId from './app/components/TouchId/TouchId';
import api from './app/mobx/api';

import { iOSColors } from 'react-native-typography';

// import { iOSColors } from 'react-native-typography';

const DashboardView = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <StatusBar barStyle="light-content" backgroundColor="white" />
    <View
      style={{
        flex: 1,
      }}
    >
      <Dashboard />
    </View>
  </SafeAreaView>
);

const CardsView = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <View
      style={{
        flex: 1,
      }}
    >
      <Cards />
    </View>
  </SafeAreaView>
);

const PaymentsView = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <View
      style={{
        flex: 1,
      }}
    >
      <Payments />
    </View>
  </SafeAreaView>
);

const AccountsView = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <StatusBar barStyle="light-content" backgroundColor="white" />
    <View
      style={{
        flex: 1,
      }}
    >
      <Accounts store={api.request('/users/1/accounts')} />
    </View>
  </SafeAreaView>
);

const makeTabBarIcon = (icon, size = 24) => {
  const TabBarIcon = ({ tintColor }) => <MaterialIcons color={tintColor} name={icon} size={size} />;
  TabBarIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };
  return TabBarIcon;
};

const MainApp = TabNavigator(
  {
    DashboardView: {
      screen: DashboardView,
      navigationOptions: {
        title: 'Dashboard',
        tabBarIcon: makeTabBarIcon('graphic-eq'),
      },
    },
    Accounts: {
      screen: AccountsView,
      navigationOptions: {
        title: 'Accounts',
        tabBarIcon: makeTabBarIcon('account-balance'),
      },
    },
    Payments: {
      screen: PaymentsView,
      navigationOptions: () => ({
        title: 'Pay',
        tabBarIcon: makeTabBarIcon('compare-arrows'),
        // tabBarOnPress: () => {   navigation.navigate('Modal'); },
      }),
    },
    CardView: {
      screen: CardsView,
      navigationOptions: {
        title: 'Manage',
        tabBarIcon: makeTabBarIcon('account-balance-wallet'),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button title="Close modal" onPress={() => navigation.goBack(null)} />
  </SafeAreaView>
);

ModalScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const TransactionScreen = ({ navigation }) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <Transaction navigation={navigation} />
  </SafeAreaView>
);

TransactionScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const InsightsScreen = ({ navigation }) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <Insights navigation={navigation} />
  </SafeAreaView>
);

InsightsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const SendMoneyScreen = ({ navigation }) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <SendMoney navigation={navigation} />
  </SafeAreaView>
);

SendMoneyScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const TouchIdScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: iOSColors.blue }}>
    <TouchId navigation={navigation} />
  </SafeAreaView>
);

TouchIdScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const RootNavigator = StackNavigator(
  {
    TouchId: {
      screen: TouchIdScreen,
    },
    MainApp: {
      screen: MainApp,
    },
    Modal: {
      screen: ModalScreen,
    },
    Transaction: {
      screen: TransactionScreen,
    },
    Insights: {
      screen: InsightsScreen,
    },
    SendMoney: {
      screen: SendMoneyScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default class RootComponent extends Component {
  render() {
    return (
      <Provider
        stores={{
          api,
        }}
      >
        <RootNavigator />
      </Provider>
    );
  }
}
