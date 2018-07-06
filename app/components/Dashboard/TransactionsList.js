import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Card, List, ListItem, MaterialCommunityIcons } from 'react-native-elements';
import { iOSColors, iOSUIKit } from 'react-native-typography'
import { withNavigation } from 'react-navigation';

import { topTransactions, topCategories } from '../../static/fakeData';



class TransactionsList extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Card>
          <Text style={iOSUIKit.subheadEmphasized}>Top categories</Text>
          <List containerStyle={{ borderTopColor: '#fff' }}  >
            {
              topCategories.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  titleNumberOfLines={2}
                  leftIcon={{ name: item.icon, type: 'material-community', color: iOSColors.yellow }}
                  // subtitle={item.subtitle}
                  rightTitle={item.amount}
                  hideChevron
                  rightTitleStyle={{ color: iOSColors.green, marginRight: 5 }}
                  rightTitleNumberOfLines={2}
                  containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
                />
              ))
            }
          </List>
        </Card>

        <Card>
          <Text style={iOSUIKit.subheadEmphasized}>Latest transactions</Text>
          <List containerStyle={{ borderTopColor: '#fff' }} >
            {
              topTransactions.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon, type: 'material-community', color: iOSColors.purple }}
                  subtitle={item.subtitle}
                  rightTitle={item.amount}
                  hideChevron
                  rightTitleStyle={{ color: iOSColors.red, marginRight: 5 }}
                  containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
                  onPress={() => navigation.navigate('Transaction', { transaction: item })}
                />
              ))
            }
          </List>
        </Card>
      </View>
    )
  }
}

export default withNavigation(TransactionsList);