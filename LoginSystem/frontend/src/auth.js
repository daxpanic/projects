import { STORAGE_KEYS } from './config';

export const setSession = (token, email) => {
    localStorage.setItem(STORAGE_KEYS.token, token);
    localStorage.setItem(STORAGE_KEYS.email, email);
};

export const clearSession = () => {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.email);
};

export const getToken = () => localStorage.getItem(STORAGE_KEYS.token);
export const getEmail = () => localStorage.getItem(STORAGE_KEYS.email);
