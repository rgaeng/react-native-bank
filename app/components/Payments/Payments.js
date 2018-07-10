import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, List, ListItem, Header } from 'react-native-elements';
import { iOSColors } from 'react-native-typography';
import { withNavigation } from 'react-navigation';

import { contacts } from '../../static/fakeData';

class Payments extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Header
          leftComponent={{
            icon: 'arrow-back',
            color: iOSColors.black,
          }}
          centerComponent={{
            text: 'Pay a friend 💸',
            style: {
              color: iOSColors.black,
              fontSize: 22,
            },
          }}
          outerContainerStyles={{
            backgroundColor: iOSColors.white,
          }}
          backgroundColor={iOSColors.white}
        />

        <ScrollView>
          <Card>
            <List
              containerStyle={{
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderBottomColor: iOSColors.white,
              }}
            >
              {contacts.map(item => (
                <ListItem
                  roundAvatar
                  avatar={{
                    uri: item.photo,
                  }}
                  key={JSON.stringify(item)}
                  title={item.name}
                  containerStyle={{
                    borderBottomColor: iOSColors.white,
                  }}
                  onPress={() => navigation.navigate('SendMoney', { recepient: item })}
                />
              ))}
            </List>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(Payments);
