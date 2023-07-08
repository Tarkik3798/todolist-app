export interface Todo {
    id: string | undefined;
    title: string;
    description: string;
    userId: string;
    date: string;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    username: string;
  }
  
  export interface RootState {
    auth: AuthState;
    todos: {
        todos: Todo[];
    }
  }
  
  export type User = {
    id: string;
    username: string;
    password: string;
  }