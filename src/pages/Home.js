import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyledButton, Page, ButtonGroup } from '../components';
import { ROUTES } from '../constants';

class Home extends Component {
  navigate = (route = 'Settings') => {
    this.props.navigation.navigate(route, { testParam: 'We did it!', title: 'Settings' });
  };

  render() {
    return (
      <Page>
        <Text testID="homeText">Home page</Text>
        <Text testID="testId">Test Tag</Text>
        <ButtonGroup>
          <StyledButton
            title="Settings"
            testID="settingsButton"
            onPress={() => {
              this.navigate(ROUTES.SETTINGS);
            }}
          />
          <StyledButton
            title="Modal"
            onPress={() => {
              this.navigate('Modal');
            }}
          />
          <StyledButton
            title="Scanner"
            onPress={() => {
              this.navigate('Scanner');
            }}
          />
          <StyledButton
            title="Tickets"
            onPress={() => {
              this.navigate('Tickets');
            }}
          />
        </ButtonGroup>
      </Page>
    );
  }
}

export default Home;
