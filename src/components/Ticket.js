import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticketNumber: null,
    };
  }

  render() {
    const { ticketNumber } = this.state;
    return (
      <View>
        <Text>Ticket</Text>
        <TextInput
          value={ticketNumber}
          onChangeText={text => this.setState({ ticketNumber: text })}
        />
      </View>
    );
  }
}

export default Ticket;
