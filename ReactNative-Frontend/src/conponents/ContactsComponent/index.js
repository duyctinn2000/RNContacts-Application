import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeName';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';
const ContactsComponent = ({sortBy, data, loading}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, country_code, phone_number} =
      item;
    return (
      <>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigate(CONTACT_DETAIL, {item});
          }}>
          <View style={styles.item}>
            {contact_picture ? (
              <Image
                style={{width: 45, height: 45, borderRadius: 100}}
                source={{uri: contact_picture}}
              />
            ) : (
              <View
                style={{
                  width: 45,
                  height: 45,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.grey,
                  borderRadius: 100,
                }}>
                <Text style={(styles.name, {color: colors.white})}>
                  {first_name ? first_name[0] : ''}
                </Text>
                <Text style={(styles.name, {color: colors.white})}>
                  {last_name ? last_name[0] : ''}
                </Text>
              </View>
            )}
            <View style={{paddingLeft: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.name}>{first_name}</Text>
                <Text style={styles.name}> {last_name}</Text>
              </View>
              <Text
                style={
                  styles.phoneNumber
                }>{`${country_code} ${phone_number}`}</Text>
            </View>
          </View>
          <Icon
            name="right"
            type="AntDesign"
            size={18}
            color={colors.grey}></Icon>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        {!loading ? (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? sortBy == 'Recently'
                    ? data.reverse()
                    : data.sort((a, b) => {
                        if (sortBy == 'First Name') {
                          if (b.first_name > a.first_name) {
                            return -1;
                          } else {
                            return 1;
                          }
                        } else if (sortBy == 'Last Name') {
                          if (b.last_name > a.last_name) {
                            return -1;
                          } else {
                            return 1;
                          }
                        }
                      })
                  : data
              }
              ItemSeparatorComponent={() => (
                <View style={{height: 0.5, backgroundColor: colors.grey}} />
              )}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 50}}></View>}
            />
          </View>
        ) : (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon type="FontAwesome" size={21} name="plus" color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
