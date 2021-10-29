import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../conponents/common/Icon';
import ContactDetailComponent from '../../conponents/ContactDetailComponent';
import {CONTACT_LIST} from '../../constants/routeName';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {GlobalContext} from '../../context/Provider';
const ContactDetail = () => {
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions, navigate} = useNavigation();
  const {params: {item = {}} = {}} = useRoute();
  const handleLogout = () => {
    Alert.alert(
      'Delelte!',
      'Are you sure you want remove ' + item.first_name + '?',
      [
        {text: 'Cancel', onPress: () => {}},
        {
          text: 'Ok',
          onPress: () => {
            deleteContact(item.id)(contactsDispatch)(() => {
              navigate(CONTACT_LIST);
            });
          },
        },
      ],
    );
  };
  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <>
              <View style={{flexDirection: 'row', paddingRight: 10}}>
                <TouchableOpacity style={{paddingRight: 10}}>
                  <Icon
                    name={item.is_favorite ? 'star' : 'star-border'}
                    size={21}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleLogout();
                  }}>
                  {loading ? (
                    <ActivityIndicator color={colors.primary} size="small" />
                  ) : (
                    <Icon name="delete" size={21} />
                  )}
                </TouchableOpacity>
              </View>
            </>
          );
        },
      });
    }
  }, [item, loading]);
  return <ContactDetailComponent contact={item} />;
};
export default ContactDetail;
