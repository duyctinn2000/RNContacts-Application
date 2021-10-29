import axios from '../../../assets/helpers/axiosInterceptor';
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';

export default () => (dispatch) => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });
  axios
    .get('contacts/')
    .then((res) => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.status
          : {error: 'Something went wrong, try again'},
      });
    });
};
