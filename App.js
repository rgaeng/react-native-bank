import React from 'react';
import { Button, View, SafeAreaView, Text, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import Dashboard from './app/components/Dashboard';
import Cards from './app/components/Cards/Cards';
import Payments from './app/components/Payments/Payments';
import Transaction from './app/components/Transaction';
// import { iOSColors } from 'react-native-typography';

const DashboardView = ({ navigation }) => (
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
      <Dashboard navigation={navigation} />
    </View>
  </SafeAreaView>
);

const AccountsView = ({ navigation }) => (
  <SafeAreaView>
    <Text>Accounts info will go here</Text>
  </SafeAreaView>
);

const CardsView = ({ navigation }) => (
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

const PaymentsView = ({ navigation }) => (
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

const MainApp = TabNavigator(
  {
    DashboardView: {
      screen: DashboardView,
      navigationOptions: {
        title: 'Dashboard',
        tabBarIcon: ({ tintColor }) => <MaterialIcons color={tintColor} name="graphic-eq" size={26} />,
      },
    },
    Accounts: {
      screen: AccountsView,
      navigationOptions: {
        title: 'Accounts',
        tabBarIcon: ({ tintColor }) => <MaterialIcons color={tintColor} name="account-balance" size={26} />,
      },
    },
    Payments: {
      screen: PaymentsView,
      navigationOptions: ({ navigation }) => ({
        title: 'Pay',
        tabBarIcon: ({ tintColor }) => <MaterialIcons color={tintColor} name="compare-arrows" size={26} />,
        // tabBarOnPress: () => {   navigation.navigate('Modal'); },
      }),
    },
    CardView: {
      screen: CardsView,
      navigationOptions: {
        title: 'Manage',
        tabBarIcon: ({ tintColor }) => <MaterialIcons color={tintColor} name="account-balance-wallet" size={26} />,
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

const RootNavigator = StackNavigator(
  {
    MainApp: {
      screen: MainApp,
    },
    Modal: {
      screen: ModalScreen,
    },
    Transaction: {
      screen: TransactionScreen,
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);

export default RootNavigator;
