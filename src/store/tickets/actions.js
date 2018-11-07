export const ADD_TICKET = 'ADD_TICKET';

export const addTicket = tTicket => {
  return {
    type: ADD_TICKET,
    payload: tTicket,
  };
};
