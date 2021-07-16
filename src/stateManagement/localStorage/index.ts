import log from '../../helpers/log';
import { RootState } from '../store/types';

export const deleteLocalStorageValue = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    log.error(error);
  }
};

export const getLocalStorageValue = (key: string, defaultValue = null): Record<string, unknown> | null => {
  try {
    const value = localStorage.getItem(key);
    const deSerializedValue = JSON.parse(value || '') as Record<string, unknown>;
    return deSerializedValue || defaultValue;
  } catch (error) {
    log.error(error);
    return defaultValue;
  }
};

export const setLocalStorageValue = (key: string, value: Record<string, unknown>): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    log.error(error);
    throw error;
  }
};

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState) as RootState;
    return state;
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: RootState): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};
