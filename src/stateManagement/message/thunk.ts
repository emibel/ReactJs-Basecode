import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as messageActions from './actions';

import api from '../../api';
import { RootState } from '../store/types';

export const fetchMessage = (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
  try {
    dispatch(messageActions.fetchMessage.request());
    const result = await api.messages.fetchMessages();
    dispatch(messageActions.fetchMessage.success(result));
  } catch (error) {
    dispatch(messageActions.fetchMessage.failure(error));
  }
};
