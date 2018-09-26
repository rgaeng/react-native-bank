import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TextInput } from 'react-native';
import { CheckBox, Button, Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import iOSColors from 'react-native-typography/dist/helpers/iOSColors';
import iOSUIKit from 'react-native-typography/dist/collections/iOSUIKit';

import Layout from '../Layout';
import Header from '../../components/Header';

const styles = {
  fullFlex: {
    flex: 1,
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
};

const Body = styled.View`
  width: 100%;
`;

const AvatarContainer = styled(View)`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30;
  margin-bottom: 30;
`;

const FieldContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 60;
  borderbottomwidth: 1px;
  borderbottomcolor: ${iOSColors.gray};
`;

const Label = styled(Text)``;

class SendMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      reference: '',
      repeat: false,
    };
  }

  handleAmountInput = text => {
    const formatedText = text.replace(/[^0-9.]/g, '');
    this.setState({ amount: formatedText }); // TODO: needs reviewing. text appears formated only after entering a number or decimal point
  };

  render() {
    const { navigation } = this.props;
    const { state, goBack } = navigation;
    const { amount, reference, repeat } = this.state;
    const { recepient } = state.params;
    return (
      <Layout>
        <View>
          <Header title="Send money" />
          <Body>
            <AvatarContainer>
              <Avatar
                medium
                rounded
                source={{ uri: recepient.photo }}
                onPress={() => console.log('Works!')}
                activeOpacity={0.7}
              />
              <Text style={iOSUIKit.callout}>{recepient.name}</Text>
            </AvatarContainer>
            <FieldContainer>
              <Label style={styles.fullFlex}>HK$</Label>
              <TextInput
                style={{ height: 40, flex: 2, textAlign: 'right' }}
                keyboardType="numeric"
                onChangeText={this.handleAmountInput}
                value={amount}
              />
            </FieldContainer>
            <FieldContainer>
              <Label style={styles.fullFlex}>Reference</Label>
              <TextInput
                style={{ height: 40, flex: 2, textAlign: 'right' }}
                onChangeText={text => this.setState({ reference: text })}
                value={reference}
              />
            </FieldContainer>
            <FieldContainer>
              <Label style={styles.fullFlex}>Frequency</Label>
              <CheckBox
                title="One off"
                checked={!repeat}
                onPress={() => this.setState(state => ({ ...state, repeat: false }))}
                containerStyle={[styles.checkBox, styles.fullFlex]}
              />
              <CheckBox
                title="Repeat"
                checked={repeat}
                onPress={() => this.setState(state => ({ ...state, repeat: true }))}
                containerStyle={[styles.checkBox, styles.fullFlex]}
              />
            </FieldContainer>
            <View style={{ marginTop: 40 }}>
              <Button
                raised
                title="Send payment"
                color={iOSColors.white}
                backgroundColor={iOSColors.blue}
                onPress={() => goBack(null)}
              />
            </View>
          </Body>
        </View>
      </Layout>
    );
  }
}

SendMoney.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        recepient: PropTypes.shape({}),
      }),
    }),
    goBack: PropTypes.func,
  }).isRequired,
};

export default withNavigation(SendMoney);
