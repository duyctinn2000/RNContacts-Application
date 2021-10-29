import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import RegisterComponent from '../../conponents/RegisterComponent';
import {RELOAD_ERROR} from '../../constants/actionsType';
import {LOGIN} from '../../constants/routeName';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data]),
  );
  useEffect(() => {
    authDispatch({type: RELOAD_ERROR});
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value != '') {
      setErrors({...errors, [name]: null});
      if (name == 'passWord') {
        if (value.length < 8) {
          setErrors({...errors, [name]: 'Password needs min 8 characters'});
        }
      }
    } else {
      setErrors({...errors, [name]: 'This field is requested'});
    }
  };
  const onSubmit = () => {
    //validation
    authDispatch({type: RELOAD_ERROR});
    if (!form.userName) {
      setErrors((prev) => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.lastName) {
      setErrors((prev) => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.firstName) {
      setErrors((prev) => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.email) {
      setErrors((prev) => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.passWord) {
      setErrors((prev) => {
        return {...prev, passWord: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, {data: response});
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};
export default Register;
