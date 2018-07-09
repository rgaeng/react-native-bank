import { View, Text, ScrollView } from 'react-native';
import { Card, Icon, ButtonGroup, List, ListItem } from 'react-native-elements';
import { iOSColors } from 'react-native-typography';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import SliderEntry, { entryPropTypes } from './SliderEntry';
import { sliderWidth, itemWidth } from '../../styles/Slider.style';
import styles from '../../styles/index.style';
import { cards, cardActions } from '../../static/fakeData';

const ShowPin = () => (
  <View>
    <Icon raised name="eye" type="material-community" color={iOSColors.purple} onPress={() => console.log('hello')} />
    <Text>Show pin</Text>
  </View>
);

const FreezeCard = () => (
  <View>
    <Icon raised name="close" type="material-community" color={iOSColors.purple} onPress={() => console.log('hello')} />
    <Text>Freeze card</Text>
  </View>
);

const renderItemWithParallax = ({ item, index }, parallaxProps) => (
  <SliderEntry data={item} even={(index + 1) % 2 === 0} parallax parallaxProps={parallaxProps} />
);

renderItemWithParallax.propTypes = {
  item: PropTypes.shape(entryPropTypes),
  index: PropTypes.number,
};

renderItemWithParallax.defaultProps = {
  index: -1,
  item: {},
};

export default () => (
  <ScrollView>
    <Carousel
      data={cards}
      renderItem={renderItemWithParallax}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      hasParallaxImages
      firstItem={1}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.7}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      loop
      loopClonesPerSide={2}
    />

    <View>
      <ButtonGroup
        buttons={[{ element: ShowPin }, { element: FreezeCard }]}
        containerStyle={{
          height: 100,
          marginLeft: 15,
          marginRight: 15,
        }}
      />
    </View>

    <Card>
      <List
        containerStyle={{
          borderTopColor: '#fff',
        }}
      >
        {cardActions.map(item => (
          <ListItem
            key={JSON.stringify(item)}
            title={item.title}
            titleStyle={{
              fontSize: 14,
            }}
            hideChevron
            switchButton
            switched={item.switched}
            containerStyle={{
              borderBottomColor: '#fff',
              borderTopColor: '#fff',
            }}
          />
        ))}
      </List>
    </Card>
  </ScrollView>
);
