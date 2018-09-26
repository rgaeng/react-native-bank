import React, { Component } from 'react';
import { Alert } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { iOSUIKit } from 'react-native-typography';
import { PropTypes } from 'prop-types';

import { Title, ScreenContainer, ErrorMessage } from './styles';
import routeNames from '../../navigation/constants';
import Layout from '../Layout';

class TouchId extends Component {
  state = {
    errorMessage: undefined,
  };

  componentDidMount() {
    const { navigation } = this.props;
    FingerprintScanner.isSensorAvailable()
      .then(() => {
        FingerprintScanner.authenticate({ description: 'Scan your fingerprint to login' })
          .then(() => {
            navigation.navigate(routeNames.MAIN);
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <Layout>
        <ScreenContainer>
          <Title style={iOSUIKit.largeTitleEmphasized}>Log in</Title>
          {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        </ScreenContainer>
      </Layout>
    );
  }
}

TouchId.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default TouchId;
