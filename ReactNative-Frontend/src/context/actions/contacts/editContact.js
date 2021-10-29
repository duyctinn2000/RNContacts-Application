import axios from '../../../assets/helpers/axiosInterceptor';
import {
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';

export default (id, form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    last_name: form.lastName || '',
    first_name: form.firstName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({
    type: EDIT_CONTACTS_LOADING,
  });
  axios
    .put(`contacts/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_CONTACTS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
      onSuccess(res.data);
    })
    .catch((err) => {
      dispatch({
        type: EDIT_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
