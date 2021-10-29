import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LOGIN, LOGOUT, REGISTER} from '../constants/routeName';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import Register from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGOUT} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
