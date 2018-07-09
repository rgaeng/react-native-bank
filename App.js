import React from 'react';
import { Button, View, SafeAreaView, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Dashboard from './app/components/Dashboard';
import Cards from './app/components/Cards/Cards';
import Payments from './app/components/Payments/Payments';
import Accounts from './app/components/Accounts';
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
      <Accounts />
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

const MainApp = TabNavigator({
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
});

const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button title="Close modal" onPress={() => navigation.goBack(null)} />
  </SafeAreaView>
);

ModalScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: Function,
  }).isRequired,
};

const RootNavigator = StackNavigator(
  {
    MainApp: {
      screen: MainApp,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootNavigator;
