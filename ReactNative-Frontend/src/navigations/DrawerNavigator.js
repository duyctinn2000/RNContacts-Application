import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {HOME} from '../constants/routeName';
import {GlobalContext} from '../context/Provider';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME} component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
