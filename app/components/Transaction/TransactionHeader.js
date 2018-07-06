import React, { Component } from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import { iOSColors, iOSUIKit } from 'react-native-typography';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo";
import { PENDING, APPROVED, REFUSED } from '../../static/constants';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: 50,
    height: 50
  },
  gray: {
    color: iOSColors.gray,
  },
  green: {
    color: iOSColors.green,
  },
  red: {
    color: iOSColors.red,
  }
});

const HeaderContainer = styled(View)`
  background: ${iOSColors.blue};
  height: ${height * .15};
`;

const TitleContainer = styled(View)`
  margin-top: -30;
`;

const Title = styled(Text)`
  margin: 0 auto;
  margin-top: 10;
`;

const StatusContainer = styled(View)`
  position: absolute;
  right: 10;
  top: 40;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Status = styled(Text)`
  color: ${iOSColors.gray}
`;

const TitleIconWrapper = styled(View)`
  background: ${iOSColors.gray};
  width: 60;
  height: 60;
  border-radius: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

class TransactionHeader extends Component {
  render() {
    const { navigation, transaction } = this.props;
    const color = transaction.status === PENDING ? iOSColors.gray : (transaction.status === APPROVED ? iOSColors.green : iOSColors.red);
    const style = transaction.status === PENDING ? styles.gray : (transaction.status === APPROVED ? styles.green : styles.red);
    return (
      <View>
        <HeaderContainer>
          <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={{ paddingTop: 50, padding: 20 }}
          >
            <View style={styles.backButtonContainer}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack(null)}>
                <Icon size={30} name="arrow-left-thick" type="material-community" />
              </TouchableWithoutFeedback>
            </View>
          </LinearGradient>
        </HeaderContainer>
        <TitleContainer>
          <TitleIconWrapper>
            <Icon size={40} color="white" name="coffee" type="material-community" />
          </TitleIconWrapper>
          <Title style={iOSUIKit.callout}>{transaction.title}</Title>
          <StatusContainer>
            <Icon color={color} size={15} name="alert-circle-outline" type="material-community" />
            <Status style={style}>{transaction.status}</Status>
          </StatusContainer>
        </TitleContainer>
      </View>
    );
  }
}

export default withNavigation(TransactionHeader);