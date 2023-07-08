import { Todo } from '../types';

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

// Action Creators
export const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const updateTodo = (todo: Todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
