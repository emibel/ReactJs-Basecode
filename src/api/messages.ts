import { apiRequest } from '../config/api';
import { Message } from '../stateManagement/message/types';

const messages = {
  // fetchMessages: (): Promise<Array<Message>> => {
  //   return apiRequest.get('/messages');
  // },
  fetchMessages: (): Promise<Array<Message>> => {
    return Promise.resolve(['mensaje 1', 'mensaje 2']);
  },
  getMessage: (id: number): Promise<Message> => {
    return apiRequest.get(`/messages/${id}`);
  },
  createMessage: (message: Message): Promise<Message> => {
    return apiRequest.post('/messages', { data: message });
  },
  deleteMessage: (id: number): Promise<void> => {
    return apiRequest.delete(`/messages/${id}`);
  },
};

export default messages;
