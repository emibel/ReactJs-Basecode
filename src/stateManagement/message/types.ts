import { ActionType } from 'typesafe-actions';

import * as messageActions from './actions';

import { APIError } from '../store/types';

export type Message = string;

export interface MessagesState {
  data: Array<Message>;
  loading: boolean,
  error?: APIError,
}

export const FETCH_MESSAGE_REQUEST = 'message/FETCH_MESSAGE_REQUEST';
export const FETCH_MESSAGE_SUCCESS = 'message/FETCH_MESSAGE_SUCCESS';
export const FETCH_MESSAGE_FAILURE = 'message/FETCH_MESSAGE_FAILURE';

export type MessageActionTypes = ActionType<typeof messageActions>;
