import { useDispatch, useSelector } from 'react-redux';

import { messagesSelector } from './selectors';
import { fetchMessage } from './thunk';
import { Message } from './types';

interface MessageHook {
  messages: Array<Message>
  fetchMessage: () => void
}

const useMessage = (): MessageHook => {
  const dispatch = useDispatch();
  return {
    messages: useSelector(messagesSelector),
    fetchMessage: (): void => {dispatch(fetchMessage());},
  };
};

export default useMessage;
