import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../conponents/common/Icon';
import ContactsComponent from '../../conponents/ContactsComponent';
import logout from '../../context/actions/auth/logout';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
const Contacts = () => {
  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    console.log(sortBy + ' ' + sortPref);
    if (sortPref == 'Recently') {
      getContacts()(contactsDispatch);
    }
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  const [sortBy, setSortBy] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );

  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            type="MaterialIcon"
            style={{padding: 10}}
            size={25}
            name="menu"></Icon>
        </TouchableOpacity>
      ),
    });
  }, []);
  return <ContactsComponent data={data} loading={loading} sortBy={sortBy} />;
};

export default Contacts;
