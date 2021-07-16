/* eslint no-console: 0 */
export default {
  error: (message: string): void => {
    if (process.env.NODE_ENV === 'development') console.error(message);
  },
  log: (message: string): void => {
    if (process.env.NODE_ENV === 'development') console.log(message);
  },
};
