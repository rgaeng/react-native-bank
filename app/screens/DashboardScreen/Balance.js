import { View, Text, StyleSheet } from 'react-native';
import { iOSUIKit, iOSColors } from 'react-native-typography';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import React from 'react';
import Chart from '../../components/Chart';

const styles = StyleSheet.create({
  title: {
    color: iOSColors.green,
  },
  bottomTitle: {
    color: iOSColors.customGray,
  },
  value: {
    color: iOSColors.white,
    textAlign: 'right',
  },
});

const Wrapper = styled(props => <View {...props} />)`
  background: ${iOSColors.blue};
`;

const TextWrapper = styled(props => <View {...props} />)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default () => (
  <Wrapper>
    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={{ paddingTop: 30, padding: 20 }}>
      <TextWrapper>
        <View>
          <Text style={[iOSUIKit.footnote, styles.title]}>Balance</Text>
          <Text style={[iOSUIKit.title3Emphasized, styles.value]}> $10,839</Text>
        </View>

        <View>
          <Text style={[iOSUIKit.footnote, styles.title]}>Spending this week</Text>
          <Text style={[iOSUIKit.title3Emphasized, styles.value]}> $839</Text>
        </View>
      </TextWrapper>

      <Chart />

      <TextWrapper>
        <View>
          <Text style={[iOSUIKit.footnote, styles.bottomTitle]}>Upcoming bills</Text>
          <Text style={[iOSUIKit.title3Emphasized, styles.value]}> $1,434</Text>
        </View>

        <View>
          <Text style={[iOSUIKit.footnote, styles.bottomTitle]}>Safe to spend</Text>
          <Text style={[iOSUIKit.title3Emphasized, styles.value]}> $424</Text>
        </View>

        <View>
          <Text style={[iOSUIKit.footnote, styles.bottomTitle]}>Days to payday</Text>
          <Text style={[iOSUIKit.title3Emphasized, styles.value]}> 14</Text>
        </View>
      </TextWrapper>
    </LinearGradient>
  </Wrapper>
);
