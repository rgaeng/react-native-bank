import styled from 'styled-components/native';
import { View, Text, Dimensions } from 'react-native';
import { iOSColors } from 'react-native-typography';

const { height: DEVICE_HEIGHT } = Dimensions.get('window');

export const ScreenContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${iOSColors.black};
  margin-bottom: ${DEVICE_HEIGHT * (20 / 821)};
`;

export const ErrorMessage = styled(Text)``;
