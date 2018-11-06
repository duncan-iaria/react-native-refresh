import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Missing Title.'),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text testID="settingsText">Settings</Text>
        <Text>{navigation.getParam('testParam', 'Test Failed :(')}</Text>
        <Button
          title="Change Title"
          onPress={() => {
            navigation.setParams({
              title: 'Updated Settings',
            });
          }}
        />
      </View>
    );
  }
}

export default Settings;
