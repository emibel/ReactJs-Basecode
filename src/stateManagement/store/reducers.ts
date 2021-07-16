import { AnyAction, combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { RootState } from './types';

import { messageReducer } from '../message/reducer';

const createRootReducer = (history: History): Reducer<RootState, AnyAction> =>
  combineReducers<RootState>({
    router: connectRouter(history),
    messages: messageReducer,
  });

export default createRootReducer;
