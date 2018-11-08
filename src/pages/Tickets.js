import React, { Component } from 'react';
import { Page, StyledText, Ticket } from '../components';

class Tickets extends Component {
  render() {
    return (
      <Page>
        <StyledText>Ticket Page</StyledText>
        <Ticket />
      </Page>
    );
  }
}

export default Tickets;
