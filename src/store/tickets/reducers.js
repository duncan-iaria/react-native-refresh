import { ADD_TICKET } from './actions';
const initialTicketState = {
  isLoading: null,
  tickets: [],
};

const ticketReducer = (state = initialTicketState, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return { ...state, tickets: [...tickets, ...action.payload] };
    default:
      return state;
  }
};
