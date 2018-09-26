import React from 'react';
import Svg, { Circle, G } from 'react-native-svg';

export default ({ percent, size, color, activeColor }) =>
  (({ r, pos, d }) => (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <G rotation="-90" origin={`${pos}, ${pos}`}>
        <Circle cx={pos} cy={pos} r={r} fill="none" stroke={color} strokeWidth={d} />
        <Circle
          cx={pos}
          cy={pos}
          r={r}
          fill="none"
          stroke={activeColor}
          strokeWidth={d}
          strokeDasharray={Math.PI * 2 * r}
          strokeDashoffset={Math.PI * 2 * r * (1 - percent)}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  ))({ r: size / 2 - 0.2 * size, pos: size / 2, d: 0.03 * size });
