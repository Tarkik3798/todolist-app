import { LOGIN, LOGOUT } from '../actions/authActions';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};

export default authReducer;
