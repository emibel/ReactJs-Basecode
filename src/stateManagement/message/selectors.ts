import { Message, MessagesState } from './types';

import { APIError, RootState } from '../store/types';

const rootSelector = (state: RootState): MessagesState => state.messages;
export const messagesSelector = (state: RootState): Array<Message> => rootSelector(state).data;
export const loadingSelector = (state: RootState): boolean => rootSelector(state).loading;
export const errorSelector = (state: RootState): APIError | undefined => rootSelector(state).error;
