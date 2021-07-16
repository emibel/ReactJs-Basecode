import { useEffect, useState } from 'react';

import useMessage from '../../stateManagement/message/hook';
import { Message } from '../../stateManagement/message/types';

interface HomeHook {
  messages: Array<Message>,
  someState: boolean,
  handleOnClick: () => void
}

const useHome = (): HomeHook => {

  const [ someState, setSomeState ] = useState<boolean>(false);
  const { messages, fetchMessage } = useMessage();

  useEffect(() => {
    fetchMessage();
  }, []);

  const handleOnClick = () => {
    setSomeState(!someState);
  };

  return {
    messages,
    someState,
    handleOnClick
  };
};

export default useHome;
