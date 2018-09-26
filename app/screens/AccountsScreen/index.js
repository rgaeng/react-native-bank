import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Header, ButtonGroup, Card } from 'react-native-elements';
import { VictoryLine, VictoryContainer } from 'victory-native';
import { iOSColors } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';

import { observer } from 'mobx-react';

import { formatCurrency } from '../../utils';
import PercentGraph from './graph';

import Layout from '../Layout';
import api from '../../mobx/api';

import styles from './styles';

const accountsList = ['spending', 'savings', 'investments'];
const graphsSize = 100;
const colors = {
  dark: '#aaa',
  light: '#fff',
};

@observer
export default class AccountsScreen extends Component {
  store = api.request('/users/1/accounts');

  state = {
    activeAccounts: 1,
  };

  render() {
    const { activeAccounts } = this.state;
    const { data } = this.store;
    const accountType = accountsList[activeAccounts];
    const accounts = data ? data.filter(({ type }) => type === accountType) : [];
    return (
      <Layout>
        <View
          style={{
            flex: 1,
          }}
        >
          <Header
            rightComponent={{
              icon: 'add',
              color: iOSColors.black,
            }}
            centerComponent={{
              text: 'Accounts',
              style: {
                fontSize: 22,
                color: iOSColors.black,
              },
            }}
            outerContainerStyles={{
              backgroundColor: iOSColors.white,
            }}
            backgroundColor={iOSColors.white}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <ButtonGroup
              containerStyle={styles.buttonGroup}
              buttons={accountsList.map(it => `${it[0].toUpperCase()}${it.substr(1)}`)}
              selectedIndex={activeAccounts}
              onPress={index => this.setState({ activeAccounts: index })}
            />
            <View style={styles.centered}>
              <Text style={[styles.small, styles.gray, styles.spaceAround]}>
                COMBINED {accountType.toUpperCase()} AMOUNT
              </Text>
              <View style={[styles.centerChildren, styles.centered, styles.spaceAround]}>
                {/* <Text style={[styles.gray, styles.spaceRight]}>{accountsCurrency}</Text> */}
                <Text style={styles.large}>
                  {formatCurrency(accounts.reduce((sum, { total }) => sum + parseFloat(total, 10), 0).toFixed(2))}
                </Text>
              </View>
            </View>
            <ScrollView>
              {accounts.map(({ name, total, goal, points, interestRate, currency }) => (
                <Card
                  wrapperStyle={styles.graphsWrapper}
                  containerStyle={styles.graphsWrapper}
                  key={JSON.stringify({ name, total, goal })}
                >
                  <View style={styles.graphsSection}>
                    {total &&
                      goal && [
                        <PercentGraph
                          percent={total / goal}
                          size={graphsSize}
                          key="graph"
                          color={colors.dark}
                          activeColor={colors.light}
                          animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 },
                          }}
                        />,
                        <View style={styles.graphsPercentage} key="text">
                          <Text style={[styles.graphsPercentageText, styles.lightGray]}>
                            {parseInt((total / goal) * 100, 10)}%
                          </Text>
                        </View>,
                      ]}
                    {points && (
                      <VictoryLine
                        style={{
                          data: {
                            stroke: colors.light,
                          },
                        }}
                        height={100}
                        width={100}
                        containerComponent={<VictoryContainer responsive={false} />}
                        animate={{
                          duration: 2000,
                          onLoad: { duration: 1000 },
                        }}
                        data={points.map(({ x, y }) => ({ x, y: 100 - y }))}
                        padding={{ top: 0, bottom: 0 }}
                        domain={{
                          x: [0, 100],
                          y: [0, 100],
                        }}
                        range={{
                          x: [0, 100],
                          y: [0, 100],
                        }}
                      />
                    )}
                  </View>
                  <View style={styles.graphsText}>
                    <Text style={[styles.gray, styles.spaceAround]}>{name}</Text>
                    <View style={[styles.alignTopLeft, styles.spaceAround]}>
                      <Text style={[styles.spaceRight, styles.small]}>{currency}</Text>
                      <Text style={styles.large}>{formatCurrency(total)}</Text>
                    </View>
                    {goal && (
                      <Text style={styles.gray}>
                        {accountType === 'savings' ? 'Goal' : 'Limit'}: {goal}
                      </Text>
                    )}
                    {interestRate && <Text style={styles.gray}>{interestRate}% interest rate</Text>}
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 5,
                    }}
                  >
                    <Icon name="ios-arrow-forward" size={24} color={iOSColors.black} />
                  </View>
                </Card>
              ))}
            </ScrollView>
          </View>
        </View>
      </Layout>
    );
  }
}
