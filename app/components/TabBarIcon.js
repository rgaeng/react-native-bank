import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({ tintColor, icon, size, focused }) => (
  <Icon name={icon} size={size} color={focused ? '#000' : tintColor || '#ddd'} />
);

TabBarIcon.defaultProps = {
  icon: '',
  size: 24,
  focused: false,
};

TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.number,
  focused: PropTypes.bool,
};

export default TabBarIcon;
