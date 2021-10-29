import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../conponents/common/Container';
import {SETTINGS} from '../../constants/routeName';
import logout from '../../context/actions/auth/logout';
import styles from './styles';
import Icon from '../../conponents/common/Icon';

const SideMenu = ({navigation, authDispatch}) => {
  const handlerLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Ok',
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon type="Fontisto" size={17} name="player-settings"></Icon>,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Icon type="MaterialIcon" size={17} name="logout"></Icon>,
      name: 'Logout',
      onPress: handlerLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View style={{paddingHorizontal: 80}}>
          {menuItems.map(({icon, name, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
