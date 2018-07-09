import React, { Component } from 'react';
import { iOSColors, iOSUIKit } from 'react-native-typography';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import styled from 'styled-components/native';
import Header from './Header';
import { categories, merhcants, merchants } from '../static/fakeData';
import { Icon } from "react-native-elements";

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Dec'];
const CATEGORIES = 'categories';
const MERCHANTS = 'merchants';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: iOSColors.gray,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: iOSColors.lightGray,
  },
  buttonActive: {
    backgroundColor: iOSColors.white,
  },
  activeMonth: {
    color: iOSColors.black,
  }
});

const MonthsContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60;
  background-color: ${iOSColors.lightGray}
`;

const Month = styled(Text)`
  color: ${iOSColors.gray};
  text-align: center;
  margin-left: 25;
  margin-right: 25;
`;

const Body = styled(View)`
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 20;
  padding-right: 20;
  display: flex;
  justify-content: space-between;
  height: 85%;
`;

const ButtonsContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

const Button = styled(Text)`
  flex: 1;
  text-align: center;
`;

const Footer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlusContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class Insights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'categories',
      currentMonth: 'March',
    }
  }

  handleClickButton(type) {
    this.setState(state => ({
      ...state,
      activeButton: type,
    }));
  }

  handleClickMonth(month) {
    this.setState(state => ({
      ...state,
      currentMonth: month,
    }));
  }

  render() {
    const { activeButton, currentMonth } = this.state;
    return (
      <View>
        <Header title="Insights" />
        <MonthsContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              months.map((month, index) => <Month key={'month' + index} style={currentMonth === month ? styles.activeMonth : undefined} onPress={this.handleClickMonth.bind(this, month)}>{month}</Month>)
            }
          </ScrollView>
        </MonthsContainer>
        <Body>
          <View>
            <ButtonsContainer>
              <Button
                style={[styles.button, activeButton === CATEGORIES ? styles.buttonActive : null]}
                onPress={this.handleClickButton.bind(this, CATEGORIES)}
              >
                Categories
            </Button>
              <Button
                style={[styles.button, activeButton === MERCHANTS ? styles.buttonActive : null]}
                onPress={this.handleClickButton.bind(this, MERCHANTS)}
              >
                Merchants
            </Button>
            </ButtonsContainer>
            <List containerStyle={{ borderTopColor: '#fff' }}  >
              {
                activeButton === CATEGORIES ?
                  categories[currentMonth].map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      titleNumberOfLines={2}
                      leftIcon={{ name: item.icon, type: 'material-community', color: iOSColors.yellow }}
                      // subtitle={item.subtitle}
                      rightTitle={item.amount}
                      hideChevron
                      rightTitleStyle={{ color: iOSColors.green, marginRight: 5 }}
                      rightTitleNumberOfLines={2}
                      containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
                      containerStyle={{ marginBottom: 30 }}
                    />
                  )) :
                  merchants[currentMonth].map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      titleNumberOfLines={2}
                      leftIcon={{ name: item.icon, type: 'material-community', color: iOSColors.blue }}
                      // subtitle={item.subtitle}
                      rightTitle={item.amount}
                      hideChevron
                      rightTitleStyle={{ color: iOSColors.green, marginRight: 5 }}
                      rightTitleNumberOfLines={2}
                      containerStyle={{ borderBottomColor: '#fff', borderTopColor: '#fff' }}
                      containerStyle={{ marginBottom: 30 }}
                    />
                  ))
              }
            </List>
          </View>
          <Footer>
            <PlusContainer>
              <Icon onPress={() => console.log('pressed on plus!')} size={30} name="plus-circle" type="material-community" />
              <Text>Top ups & transfers</Text>
            </PlusContainer>
            <Text>HK$ 123.34</Text>
          </Footer>
        </Body>
      </View>
    );
  }
}

export default Insights;
