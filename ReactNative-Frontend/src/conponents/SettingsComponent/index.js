import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Container from '../common/Container';
import Icon from '../common/Icon';

const SettingsComponet = ({
  settingsOptions,
  setModalVisible,
  modalVisible,
  prefArray,
}) => {
  console.log(prefArray);
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        closeOnTouchOutside={false}
        modalBody={
          <View
            style={{
              paddingTop: 40,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            {prefArray.map(({name, selected, onPress}) => {
              return (
                <View style={{padding: 20}} key={name}>
                  <TouchableOpacity
                    onPress={onPress}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    {selected && <Icon name="check" size={21} />}
                    <Text
                      style={{fontSize: 20, paddingLeft: selected ? 15 : 30}}>
                      {name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        }
        title="Sort by"
        setModalVisible={setModalVisible}
      />
      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, subTitle, onPress}, index) => (
          <TouchableOpacity onPress={onPress} key={title}>
            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text style={{fontSize: 14, opacity: 0.6, paddingTop: 5}}>
                  {subTitle}
                </Text>
              )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponet;
