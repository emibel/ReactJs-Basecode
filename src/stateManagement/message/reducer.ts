import {
  MessagesState,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
  MessageActionTypes,
} from './types';
import initialState from './initialState';

export const messageReducer = (state = initialState, action: MessageActionTypes): MessagesState => {
  switch (action.type) {
    case FETCH_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
