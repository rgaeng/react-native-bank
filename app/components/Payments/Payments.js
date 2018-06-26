import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native';
import {Card, List, ListItem, Header} from 'react-native-elements';
import {iOSColors} from 'react-native-typography'

import {contacts} from '../../static/fakeData';

class Payments extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#fff'
      }}>
        <Header
          leftComponent={{
          icon: 'arrow-back',
          color: iOSColors.black
        }}
          centerComponent={{
          text: 'Pay a friend 💸',
          style: {
            color: iOSColors.black,
            fontSize: 22
          }
        }}
          outerContainerStyles={{
          backgroundColor: iOSColors.white
        }}
          backgroundColor={iOSColors.white}/>

        <ScrollView>
          <Card>
            <List
              containerStyle={{
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderBottomColor: iOSColors.white
            }}>

              {contacts.map((item, i) => (<ListItem
                roundAvatar
                avatar={{
                uri: item.photo
              }}
                key={i}
                title={item.name}
                containerStyle={{
                borderBottomColor: iOSColors.white
              }}/>))
}
            </List>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

export default Payments;
