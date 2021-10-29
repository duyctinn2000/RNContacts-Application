import axios from '../../../assets/helpers/axiosInterceptor';
import {
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';

export default (id) => (dispatch) => (onSuccess) => {
  dispatch({
    type: DELETE_CONTACTS_LOADING,
  });
  axios
    .delete(`contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CONTACTS_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
