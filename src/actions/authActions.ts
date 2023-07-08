import {User}  from '../types';

// Action Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const login = (user: User) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
