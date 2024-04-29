
import Cookies from 'js-cookie';

// Function to get the current access token from cookies
export const getAccessToken = (): string | undefined => {
  return Cookies.get('access_token');
};

// Function to set the access token in cookies
export const setAccessToken = (token: string, expires: number = 1): void => {
  Cookies.set('access_token', token, { expires });
};

// Function to remove the access token from cookies
export const removeAccessToken = (): void => {
  Cookies.remove('access_token');
  window.location.reload();
};
