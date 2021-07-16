import { API_URL } from './constants';

import { configureRequest } from '../helpers/axios';

const getAuthorizationToken = (): string => {
  return 'token';
};

const apiRequest = configureRequest(API_URL, getAuthorizationToken);

export { apiRequest };
