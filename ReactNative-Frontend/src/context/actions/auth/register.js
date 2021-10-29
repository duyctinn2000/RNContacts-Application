import axiosInstance from '../../../assets/helpers/axiosInterceptor';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionsType';
export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
export default ({
    email,
    passWord: password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  (dispatch) =>
  (onSucess) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSucess(res.data);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
