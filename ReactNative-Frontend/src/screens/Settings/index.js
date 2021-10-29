import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SettingsComponet from '../../conponents/SettingsComponent';
const Settings = () => {
  const [email, setEmail] = useState(null);
  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    getSettings();
  }, []);
  const saveSettings = (key, value) => {
    AsyncStorage.setItem(key, value);
  };
  const prefArray = [
    {
      name: 'First Name',
      onPress: () => {
        saveSettings('sortBy', 'First Name');
        setSortBy('First Name');
        setModalVisible(false);
      },
      selected: sortBy == 'First Name',
    },
    {
      name: 'Last Name',
      onPress: () => {
        saveSettings('sortBy', 'Last Name');
        setSortBy('Last Name');
        setModalVisible(false);
      },
      selected: sortBy == 'Last Name',
    },
    {
      name: 'Recently',
      onPress: () => {
        saveSettings('sortBy', 'Recently');
        setSortBy('Recently');
        setModalVisible(false);
      },
      selected: sortBy == 'Recently',
    },
  ];
  const settingsOptions = [
    {
      title: 'My Info',
      subTitle: 'Setup your profile',
      onPress: () => {},
    },

    {
      title: 'Accounts',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contacts to display',
      subTitle: 'All contacts',
      onPress: () => {},
    },
    {
      title: 'Sort by',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: 'Name format',
      subTitle: 'First Name first',
      onPress: () => {},
    },
    {
      title: 'Import',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Export',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Block numbers',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'About RNContacts',
      subTitle: null,
      onPress: () => {},
    },
  ];
  return (
    <SettingsComponet
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArray={prefArray}
    />
  );
};
export default Settings;
