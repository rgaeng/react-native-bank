import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Header, ButtonGroup, Card } from 'react-native-elements';
import { VictoryLine, VictoryContainer } from 'victory-native';
import { iOSColors } from 'react-native-typography';
import { MaterialIcons } from '@expo/vector-icons';

import { accountsCurrency, accountsMap } from '../../static/fakeData';
import { formatCurrency } from '../../utils';
import PercentGraph from './graph';

const graphsSize = 100;
const colors = {
  dark: '#aaa',
  light: '#fff',
};
const styles = StyleSheet.create({
  gray: {
    color: colors.dark,
  },
  lightGray: {
    color: colors.light,
  },
  small: {
    fontSize: 10,
  },
  large: {
    fontSize: 22,
  },
  centered: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
  centerChildren: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  alignTopLeft: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
  buttonGroup: {
    height: 35,
    marginTop: 30,
    marginBottom: 30,
  },
  spaceRight: {
    marginRight: 5,
  },
  spaceAround: {
    marginBottom: 5,
  },
  graphsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: graphsSize,
    padding: 0,
    borderRadius: 3,
    overflow: 'hidden',
  },
  graphsPercentage: {
    position: 'absolute',
    width: graphsSize,
    height: graphsSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphsPercentageText: {
    fontSize: 12,
  },
  graphsSection: {
    flex: 1,
    maxWidth: graphsSize,
    minWidth: graphsSize,
    width: graphsSize,
    height: graphsSize,
    backgroundColor: '#888',
    position: 'relative',
  },
  graphsText: {
    flex: 1,
    padding: 10,
    paddingLeft: 25,
  },
});

const accountsList = Object.keys(accountsMap);

export default class AccountsView extends Component {
  state = {
    activeAccounts: 1,
  };

  render() {
    const { activeAccounts } = this.state;
    const accounts = accountsMap[accountsList[activeAccounts]];
    return (
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
            <Text style={[styles.small, styles.gray, styles.spaceAround]}>COMBINED SAVINGS AMOUNT</Text>
            <View style={[styles.centerChildren, styles.centered, styles.spaceAround]}>
              <Text style={[styles.gray, styles.spaceRight]}>{accountsCurrency}</Text>
              <Text style={styles.large}>{formatCurrency(accounts.reduce((sum, { total }) => sum + total, 0))}</Text>
            </View>
          </View>
          <ScrollView>
            {accounts.map(({ name, total, goal, points, interestRate, goalText }) => (
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
                    <Text style={[styles.spaceRight, styles.small]}>{accountsCurrency}</Text>
                    <Text style={styles.large}>{formatCurrency(total)}</Text>
                  </View>
                  {goal && (
                    <Text style={styles.gray}>
                      {goalText || 'Goal'}: {goal}
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
                  <MaterialIcons color={colors.dark} name="chevron-right" size={30} />
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
