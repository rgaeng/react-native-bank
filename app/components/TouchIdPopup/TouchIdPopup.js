import React, { Component } from 'react';
import { AlertIOS, View, Text } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

class TouchIdPopup extends Component {
  componentDidMount() {
    FingerprintScanner.authenticate({ description: 'Scan your fingerprint to login' })
      .then(() => {
        const { handleClosePopup } = this.props;
        handleClosePopup();
        AlertIOS.alert('Authenticated successfully');
      })
      .catch(error => {
        const { handleClosePopup } = this.props;
        handleClosePopup();
        AlertIOS.alert(error.message);
      });
  }

  render() {
    console.log({ FingerprintScanner });
    return (
      <View>
        <Text>dewd</Text>
      </View>
    );
  }
}

export default TouchIdPopup;
