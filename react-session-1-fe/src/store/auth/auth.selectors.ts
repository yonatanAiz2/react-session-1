export const authStateSelector = (state: RootState) => state.auth;

export const isAuthenticatedSelector = (state: RootState) =>
  authStateSelector(state).isAuthenticated;

export const tokenSelector = (state: RootState) =>
  authStateSelector(state).token;

export const userSelector = (state: RootState) => authStateSelector(state).user;
