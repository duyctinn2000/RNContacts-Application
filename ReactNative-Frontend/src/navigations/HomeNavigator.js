import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTINGS,
} from '../constants/routeName';
import ContactDetail from '../screens/ContactDetail';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import Logout from '../screens/Logout';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
      <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
