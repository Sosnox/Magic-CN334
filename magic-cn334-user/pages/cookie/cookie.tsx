import Cookies from 'js-cookie';

// Function to get the current access token from cookies
export const getAccessToken = (): string | undefined => {
  return Cookies.get('access_token');
};

// Function to set the access token in cookies with a specified expiration and path
export const setAccessToken = (token: string, expires: number = 10000): void => {
  // Set the cookie to be available on all paths and to expire far in the future
  Cookies.set('access_token', token, { expires, path: '/' });
};

// Function to remove the access token from cookies and reload the page
export const removeAccessToken = (): void => {
  Cookies.remove('access_token', { path: '/' }); // Make sure to specify the path here as well
  window.location.reload(); // This will refresh the page and reflect the removal of the cookie
};
