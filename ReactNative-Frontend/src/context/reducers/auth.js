import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  RELOAD_ERROR,
  CLEAR_AUTH_STATE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  EXPIRED_TOKEN,
} from '../../constants/actionsType';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, data: payload, isLoggedIn: true};
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    case RELOAD_ERROR:
      return {...state, error: null};
    case CLEAR_AUTH_STATE:
      return {...state, data: null};
    case EXPIRED_TOKEN:
      return {...state};
    case LOGOUT_USER:
      return {...state, isLoggedIn: false, data: null, loading: false};
    default:
      return state;
  }
};

export default auth;
