import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { iOSColors, iOSUIKit } from 'react-native-typography';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from "react-native-elements";

const Wrapper = styled(View)`
  background: ${iOSColors.white};
  height: 40;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(View)`
  flex: 1;
`;

const Title = styled(Text)`
  flex: 4;
  text-align: center;
`;

const MenuButton = styled(View)`
  flex: 1;
`;

class Header extends Component {
  render() {
    const { title, navigation } = this.props;
    return (
      <Wrapper>
        <BackButton>
          <Icon onPress={() => navigation.goBack(null)} size={30} name="arrow-left-thick" type="material-community" />
        </BackButton>
        <Title style={iOSUIKit.callout}>{title}</Title>
        <MenuButton>
          <Icon onPress={() => console.log('Pressed the header menu button!')} size={30} name="menu" type="material-community" />
        </MenuButton>
      </Wrapper>
    );
  }
}

export default withNavigation(Header);
