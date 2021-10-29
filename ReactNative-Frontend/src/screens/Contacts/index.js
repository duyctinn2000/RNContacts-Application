import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../conponents/common/Icon';
import ContactsComponent from '../../conponents/ContactsComponent';
import {CONTACT_DETAIL} from '../../constants/routeName';
import logout from '../../context/actions/auth/logout';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
const Contacts = () => {
  [x, setX] = useState(false);
  const {navigate} = useNavigation();
  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref == 'Recently') {
      getContacts()(contactsDispatch);
    }
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  const contactsRef = useRef([]);
  const [sortBy, setSortBy] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (!x) {
        setX(true);
      } else {
        setX(false);
      }
      getSettings();
      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;
    console.log(newList.length - prev.length);
    if (newList.length - prev.length === 1) {
      const newContacts = newList.find(
        (item) => !prev.map((i) => i.id).includes(item.id),
      );
      navigate(CONTACT_DETAIL, {item: newContacts});
    }
  }, [x]);

  const {setOptions, toggleDrawer} = useNavigation();

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
