import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import Layout from './Layout';

const ModalScreen = ({ navigation }) => (
  <Layout>
    <Button title="Close modal" onPress={() => navigation.goBack(null)} />
  </Layout>
);

ModalScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default ModalScreen;
