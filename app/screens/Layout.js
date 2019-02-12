import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const LayoutThemes = {
  dark: {
    statusBarStyle: 'light-content',
    statusBarBg: '#fff',
    viewBg: '#000',
  },
  light: {
    statusBarStyle: 'dark-content',
    statusBarBg: '#000',
    viewBg: '#fff',
  },
};

const Layout = ({ children, theme }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.viewBg }}>
    <StatusBar barStyle={theme.statusBarStyle} backgroundColor={theme.statusBarBg} />
    <View
      style={{
        flex: 1,
      }}
    >
      {children}
    </View>
  </SafeAreaView>
);

Layout.defaultProps = {
  theme: LayoutThemes.light,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  theme: PropTypes.shape({
    statusBarStyle: PropTypes.string,
    statusBarBg: PropTypes.string,
    viewBg: PropTypes.string,
  }),
};

export default Layout;
