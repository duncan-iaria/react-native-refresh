import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home, Settings, Scanner, Tickets, Modal } from '../pages';

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
    Tickets: {
      screen: Tickets,
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

export const RootStack = createStackNavigator(
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
