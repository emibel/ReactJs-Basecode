import { RouterState } from 'connected-react-router';
import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { MessagesState } from '../message/types';

export interface RootState {
  messages: MessagesState
  router: RouterState
}

export interface APIError {
  statusOk: boolean
  data: unknown
  statusCode?: string
}

export type AppDispatch = Dispatch<AnyAction> | ThunkDispatch<RootState, unknown, AnyAction>;
