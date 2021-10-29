import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../../config/env';
import {LOGOUT} from '../../constants/routeName';
import {navigate} from '../../navigations/SideMenu/RootNavigator';
let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status == 403) {
      navigate(LOGOUT);
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
