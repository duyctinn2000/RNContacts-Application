import axios from '../../../assets/helpers/axiosInterceptor';
import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    last_name: form.lastName || '',
    first_name: form.firstName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });
  axios
    .post('contacts/', requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
