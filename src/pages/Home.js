import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ROUTES } from '../constants';

class Home extends Component {
  navigate = (route = 'Settings') => {
    this.props.navigation.navigate(route, { testParam: 'We did it!', title: 'Settings' });
  };

  render() {
    return (
      <View>
        <Text>Home page</Text>
        <Button
          title="Settings"
          onPress={() => {
            this.navigate(ROUTES.SETTINGS);
          }}
        >
          Settings
        </Button>
        <Button
          title="Modal"
          onPress={() => {
            this.navigate('Modal');
          }}
        />
        <Button
          title="Scanner"
          onPress={() => {
            this.navigate('Scanner');
          }}
        />
      </View>
    );
  }
}

export default Home;
