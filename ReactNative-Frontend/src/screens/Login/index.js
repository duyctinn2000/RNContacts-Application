import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../conponents/LoginComponent';
import {RELOAD_ERROR} from '../../constants/actionsType';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';
const Login = () => {
  const {params} = useRoute();
  const [justRegister, setJustRegister] = useState(false);

  useEffect(() => {
    if (params?.data) {
      authDispatch({
        type: RELOAD_ERROR,
      });
      setJustRegister(true);
      setForm({...form, userName: params.data.username});
      console.log({params});
    }
  }, [params]);

  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.passWord) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustRegister(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justRegister={justRegister}
    />
  );
};
export default Login;
