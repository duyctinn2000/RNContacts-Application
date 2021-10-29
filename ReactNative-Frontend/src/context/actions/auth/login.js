import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../assets/helpers/axiosInterceptor';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
} from '../../../constants/actionsType';

export default ({passWord: password, userName: username}) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {
        password,
        username,
      })
      .then((res) => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
