import ACTIONS from '../actions/'

const initialState = [];

function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_ALERT:
      return [...state, payload];
    case ACTIONS.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default alertReducer;
