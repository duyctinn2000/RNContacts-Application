import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CREATE_CONTACT} from '../../constants/routeName';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import ImageComponent from '../common/ImageComponent';
import styles from './styles';
import {DEFALUT_IMAGE_SET} from '../../constants/general';

const ContactDetailComponet = ({contact}) => {
  const {contact_picture, first_name, last_name, country_code, phone_number} =
    contact;
  const {navigate} = useNavigation();
  const uri = contact_picture || DEFALUT_IMAGE_SET;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageComponent source={uri} />
        <View style={styles.content}>
          <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon name="phone" size={21} />
            <Text style={{marginLeft: 10}}>{phone_number}</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Icon name="flag" size={21} />
            <Text style={{marginLeft: 10}}>{country_code}</Text>
          </View>
          <CustomButton
            primary
            title="Edit Contact"
            onPress={() => {
              navigate(CREATE_CONTACT, {contact, eddit: true});
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetailComponet;
