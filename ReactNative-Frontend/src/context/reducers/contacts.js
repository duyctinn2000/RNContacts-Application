import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionsType';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case DELETE_CONTACTS_LOADING:
      return {
        ...state,
        deleteContact: {...state.deleteContact, loading: true, error: null},
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.filter((item) => item.id != payload),
        },
      };
    case DELETE_CONTACTS_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: payload,
        },
      };

    case EDIT_CONTACTS_LOADING:
      return {
        ...state,
        createContact: {...state.createContact, loading: true, error: null},
      };
    case EDIT_CONTACTS_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.map((item) => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
        },
      };
    case EDIT_CONTACTS_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };

    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContact: {...state.createContact, loading: true, error: null},
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: [payload, ...state.getContacts.data],
        },
      };
    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };

    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {...state.getContacts, loading: true, error: null},
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: payload,
        },
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default contacts;
