import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card, Icon, ButtonGroup, List, ListItem} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {iOSColors, iOSUIKit} from 'react-native-typography'
import SliderEntry from './SliderEntry';
import {sliderWidth, itemWidth} from '../../styles/Slider.style';
import styles from '../../styles/index.style';
import {cards, cardActions} from '../../static/fakeData';

const ShowPin = () => {
  return (
    <View>
      <Icon
        raised
        name='eye'
        type='material-community'
        color={iOSColors.purple}
        onPress={() => console.log('hello')}/>
      <Text>Show pin</Text>
    </View>
  )
}

const FreezeCard = () => {
  return (
    <View>
      <Icon
        raised
        name='close'
        type='material-community'
        color={iOSColors.purple}
        onPress={() => console.log('hello')}/>
      <Text>Freeze card</Text>
    </View>
  )
}

class Cards extends Component {
  // static navigationOptions = {   title: 'Cards', };
  _renderItemWithParallax({
    item,
    index
  }, parallaxProps) {
    return (<SliderEntry
      data={item}
      even={(index + 1) % 2 === 0}
      parallax={true}
      parallaxProps={parallaxProps}/>);
  }

  render() {
    const buttons = [
      {
        element: ShowPin
      }, {
        element: FreezeCard
      }
    ]
    return (
      <ScrollView>
        <Carousel
          data={cards}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}/>

        <View>
          <ButtonGroup
            buttons={buttons}
            containerStyle={{
            height: 100
          }}/>
        </View>

        <Card>
          <List containerStyle={{
            borderTopColor: '#fff'
          }}>
            {cardActions.map((item, i) => (<ListItem
              key={i}
              title={item.title}
              titleStyle={{
              fontSize: 14
            }}
              hideChevron
              switchButton
              switched={item.switched}
              containerStyle={{
              borderBottomColor: '#fff',
              borderTopColor: '#fff'
            }}/>))
}
          </List>

        </Card>
      </ScrollView>
    );
  }
}

export default Cards;
