import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { APIError } from '../stateManagement/store/types';

/**
 * Configure request interceptor to set the authorization headers with the proper access token
 * @param getToken function to get the token
 */
const requestInterceptor = (getToken: () => string) => (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  return new Promise((resolve) => {
    const jwt = getToken();
    if (jwt) {
      config.headers = { Authorization: `Bearer ${jwt}` };
      return resolve(config);
    } else {
      return resolve(config);
    }
  });
};

/**
 * Configure response interceptor to standarize the error response
 * @param error
 */
const errorResponseInterceptor = (error: AxiosError) => {
  // TODO - Standarize error of border cases.
  const apierror: APIError = {
    data: error.response?.data,
    statusOk: false,
    statusCode: error.code,
  };
  return Promise.reject(apierror);
};

/**
 * Configure Axios instance
 * @param baseURL api base url
 * @param getToken function to get the token
 */
const configureRequest = (baseURL: string, getToken: () => string): AxiosInstance => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL,
  };
  const instance = axios.create(axiosConfig);
  // Set request interceptor
  instance.interceptors.request.use(requestInterceptor(getToken));
  // Set response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    errorResponseInterceptor,
  );

  return instance;
};

export { configureRequest };
