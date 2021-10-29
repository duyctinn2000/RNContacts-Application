import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import ContactDetailComponent from '../../conponents/ContactDetailComponent';
const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  return <ContactDetailComponent contact={item} />;
};
export default ContactDetail;
