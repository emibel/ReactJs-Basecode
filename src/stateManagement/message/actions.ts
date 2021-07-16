import { createAsyncAction } from 'typesafe-actions';

import { FETCH_MESSAGE_REQUEST, FETCH_MESSAGE_SUCCESS, FETCH_MESSAGE_FAILURE, Message } from './types';

import { APIError } from '../store/types';

export const fetchMessage = createAsyncAction(
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE
)<void, Array<Message>, APIError>();

//To create a single action
// import { createAction } from 'typesafe-actions';
// const singleActionSample = createAction('namespacesample/SET_SAMPLE')<PayloeadTypeSample>())
