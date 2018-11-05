import React, { Component } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home, Settings, Scanner, Modal } from './src/pages';

class App extends Component {
  render() {
    return <RootStack />;
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings,
    },
    Scanner: {
      screen: Scanner,
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          title="yes"
          onPress={() => {
            console.log('yes');
          }}
        />
      ),
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: Modal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default App;
