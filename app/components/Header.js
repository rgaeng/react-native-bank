import React from 'react';
import { withNavigation } from 'react-navigation';
import { iOSColors, iOSUIKit } from 'react-native-typography';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const Wrapper = styled(props => <View {...props} />)`
  background: ${iOSColors.white};
  height: 40;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(props => <View {...props} />)`
  flex: 1;
`;

const Title = styled(props => <Text {...props} />)`
  flex: 4;
  text-align: center;
`;

const MenuButton = styled(props => <View {...props} />)`
  flex: 1;
`;

const Header = ({ title, navigation: { goBack } }) => (
  <Wrapper>
    <BackButton>
      <Icon onPress={() => goBack(null)} size={30} name="arrow-left-thick" type="material-community" />
    </BackButton>
    <Title style={iOSUIKit.callout}>{title}</Title>
    <MenuButton>
      <Icon
        onPress={() => console.log('Pressed the header menu button!')}
        size={30}
        name="menu"
        type="material-community"
      />
    </MenuButton>
  </Wrapper>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default withNavigation(Header);
