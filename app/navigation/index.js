import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import screens from '../screens';
import routeNames from './constants';

const getTabBarIcon = type => ({ focused, tintColor }) => (
  <TabBarIcon icon={type} focused={focused} tintColor={tintColor} />
);

const AppNavigator = createBottomTabNavigator(
  {
    [routeNames.DASHBOARD]: {
      screen: screens.DashboardScreen,
      navigationOptions: {
        title: 'Dashboard',
        tabBarIcon: getTabBarIcon('ios-podium'),
      },
    },
    [routeNames.ACCOUNTS]: {
      screen: screens.AccountsScreen,
      navigationOptions: {
        title: 'Accounts',
        tabBarIcon: getTabBarIcon('ios-cash'),
      },
    },
    [routeNames.PAYMENTS]: {
      screen: screens.PaymentsScreen,
      navigationOptions: () => ({
        title: 'Pay',
        tabBarIcon: getTabBarIcon('ios-swap'),
      }),
    },
    [routeNames.CARDS]: {
      screen: screens.CardsScreen,
      navigationOptions: {
        title: 'Manage',
        tabBarIcon: getTabBarIcon('ios-card'),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: routeNames.DASHBOARD,
  }
);

const AuthNavigator = createStackNavigator(
  {
    [routeNames.LOGIN]: screens.LoginScreen,
  },
  {
    initialRouteName: routeNames.LOGIN,
    mode: 'modal',
    headerMode: 'none',
  }
);

const MainNavigator = createStackNavigator(
  {
    [routeNames.APP]: {
      screen: AppNavigator,
    },
    [routeNames.TRANSACTION]: {
      screen: screens.TransactionScreen,
    },
    [routeNames.INSIGHTS]: {
      screen: screens.InsightsScreen,
    },
    [routeNames.SENDMONEY]: {
      screen: screens.SendMoneyScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: routeNames.APP,
  }
);

const RootNavigator = createSwitchNavigator(
  {
    [routeNames.MAIN]: {
      screen: MainNavigator,
    },
    [routeNames.AUTH]: {
      screen: AuthNavigator,
    },
  },
  {
    // headerMode: 'none',
    initialRouteName: routeNames.AUTH,
  }
);

export default createAppContainer(RootNavigator);
