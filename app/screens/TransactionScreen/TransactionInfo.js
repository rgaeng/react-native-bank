import React from 'react';
import styled from 'styled-components';
import { iOSColors, iOSUIKit } from 'react-native-typography';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

const ValueWrapper = styled(props => <View {...props} />)`
  margin: 0 auto;
  margin-top: 30;
  margin-bottom: 30;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const TransactionInfo = ({ transaction: { amount, location, address } }) => (
  <View>
    <ValueWrapper>
      <Text>RMB</Text>
      <Text style={iOSUIKit.largeTitleEmphasized}>{amount}</Text>
    </ValueWrapper>

    <Card>
      <List containerStyle={{ borderTopColor: '#fff' }}>
        <ListItem
          title={location}
          leftIcon={{ name: 'map-marker-radius', type: 'material-community', color: iOSColors.yellow }}
          subtitle={address}
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
    <Text
      style={{
        textDecorationLine: 'underline',
        color: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
      }}
    >
      Something wrong with this payment?
    </Text>
  </View>
);

TransactionInfo.propTypes = {
  transaction: PropTypes.shape({
    address: PropTypes.string,
    location: PropTypes.string,
    amount: PropTypes.string,
  }).isRequired,
};

export default TransactionInfo;
