import React, { Component } from 'react';
import styled from 'styled-components/native';
import { iOSColors, iOSUIKit } from 'react-native-typography'

import { Button, View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Card, List, ListItem, MaterialCommunityIcons } from 'react-native-elements';

const ValueWrapper = styled(View)`
  margin: 0 auto;
  margin-top: 30;
  margin-bottom: 30;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

class TransactionInfo extends Component {
  render() {
    const { transaction } = this.props;
    return (
      <View>
        <ValueWrapper>
          <Text>RMB</Text>
          <Text style={iOSUIKit.largeTitleEmphasized}>{transaction.amount}</Text>
        </ValueWrapper>

        <Card>
          <List containerStyle={{ borderTopColor: '#fff' }} >
            <ListItem
              title={transaction.location}
              leftIcon={{ name: 'map-marker-radius', type: 'material-community', color: iOSColors.yellow }}
              subtitle={transaction.address}
              rightTitle="4th April 5:20pm"
              hideChevron
              rightTitleStyle={{ marginRight: 5 }}
              containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
            />
            <ListItem
              title="Split the bill with friends"
              leftIcon={{ name: 'human-greeting', type: 'material-community', color: iOSColors.yellow }}
              containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
            />
            <ListItem
              title="Add a receipt"
              leftIcon={{ name: 'note-text', type: 'material-community', color: iOSColors.yellow }}
              containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
            />
            <ListItem
              title="Add a note"
              leftIcon={{ name: 'pencil-box-outline', type: 'material-community', color: iOSColors.yellow }}
              containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
            />
          </List>
        </Card>
        <Text style={{ textDecorationLine: 'underline', color: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}>Something wrong with this payment?</Text>
      </View>
    );
  }
}

export default TransactionInfo;