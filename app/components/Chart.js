import React, { Component } from 'react';
import { VictoryLine } from "victory-native";
import {View} from 'react-native';

class Chart extends Component {
  render() {
    return (
      <View>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
          }}
          height={160}
          // interpolation= "natural"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}

          data={[
            { x: 1, y: 4 },
            { x: 2, y: 5 },
            { x: 5, y: 4 },
            { x: 7, y: 3 },
            { x: 8, y: 4 },
            { x: 9, y: 3 },
            { x: 12, y: 2 },
          ]}
        />
      </View>

    );
  }
}

export default Chart;