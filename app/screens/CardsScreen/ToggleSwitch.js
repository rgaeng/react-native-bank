import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },

  labelStyle: {
    marginHorizontal: 10,
  },
});

export default class ToggleSwitch extends React.Component {
  static calculateDimensions(size) {
    switch (size) {
      case 'small':
        return {
          width: 50,
          padding: 10,
          cercleWidth: 15,
          cercleHeight: 15,
          translateX: 22,
        };
      case 'large':
        return {
          width: 100,
          padding: 20,
          cercleWidth: 30,
          cercleHeight: 30,
          translateX: 38,
        };
      default:
        return {
          width: 60,
          padding: 12,
          cercleWidth: 18,
          cercleHeight: 18,
          translateX: 26,
        };
    }
  }

  offsetX = new Animated.Value(0);

  dimensions = ToggleSwitch.calculateDimensions(this.props.size); // eslint-disable-line react/destructuring-assignment

  static propTypes = {
    isOn: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onColor: PropTypes.string,
    offColor: PropTypes.string,
    size: PropTypes.string,
    labelStyle: PropTypes.shape({}),
    onToggle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOn: false,
    onColor: '#634fc9',
    offColor: '#ecf0f1',
    size: 'medium',
    labelStyle: {},
  };

  createToggleSwitchStyle = () => {
    const { width, padding } = this.dimensions;
    const { isOn, onColor, offColor } = this.props;
    return {
      justifyContent: 'center',
      width,
      borderRadius: 20,
      padding,
      backgroundColor: isOn ? onColor : offColor,
    };
  };

  createInsideCercleStyle = () => ({
    margin: 4,
    position: 'absolute',
    backgroundColor: 'white',
    transform: [{ translateX: this.offsetX }],
    width: this.dimensions.cercleWidth,
    height: this.dimensions.cercleHeight,
    borderRadius: this.dimensions.cercleWidth / 2,
  });

  render() {
    const { isOn, label, labelStyle, onToggle } = this.props;
    const toValue = isOn ? this.dimensions.width - this.dimensions.translateX : 0;

    Animated.timing(this.offsetX, {
      toValue,
      duration: 300,
    }).start();

    return (
      <View style={styles.container}>
        {label ? <Text style={[styles.labelStyle, labelStyle]}>{label}</Text> : null}
        <TouchableOpacity
          style={this.createToggleSwitchStyle()}
          activeOpacity={0.8}
          onPress={() => {
            onToggle(!isOn);
          }}
        >
          <Animated.View style={this.createInsideCercleStyle()} />
        </TouchableOpacity>
      </View>
    );
  }
}
