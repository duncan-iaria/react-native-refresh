import React, { Component } from 'react';
import { TextInput } from 'react-native';

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
      <TextInput
        value={ticketNumber}
        onChangeText={text => this.setState({ ticketNumber: text })}
      />
    );
  }
}
