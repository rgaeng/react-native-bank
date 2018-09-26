import React, { Component } from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { iOSUIKit } from 'react-native-typography';

import { Title, ScreenContainer, PrintButton, PrintIcon, ErrorMessage } from './styles';
import TouchIdPopup from '../TouchIdPopup/TouchIdPopup';

import printIcon from '../../static/images/finger_print.png';

// const FingerprintScanner = require('react-native-fingerprint-scanner');

class TouchId extends Component {
  state = {
    errorMessage: undefined,
    popupIsOpen: false,
  };

  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then(() => this.setState({ errorMessage: 'is available' }))
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  handleOpenPopup = () => {
    this.setState({ popupIsOpen: true });
  };

  handleClosePopup = () => {
    this.setState({ popupIsOpen: false });
  };

  render() {
    const { errorMessage, popupIsOpen } = this.state;

    return (
      <ScreenContainer>
        <Title style={iOSUIKit.largeTitleEmphasizedWhite}>Log in using Touch ID</Title>
        <PrintButton onPress={this.handleOpenPopup}>
          <PrintIcon source={printIcon} />
        </PrintButton>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        {popupIsOpen ? <TouchIdPopup handleClosePopup={this.handleClosePopup} /> : null}
      </ScreenContainer>
    );
  }
}

export default TouchId;
