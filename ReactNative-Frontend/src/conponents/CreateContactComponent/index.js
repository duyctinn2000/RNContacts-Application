import React from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';

import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFALUT_IMAGE_SET} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  error,
  loading,
  onChangeText,
  form,
  setForm,
  toggleValueChange,
  onSubmit,
  sheetRef,
  openSheet,
  closeSheet,
  localFile,
  onFileSelected,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFALUT_IMAGE_SET}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          onChangeText={(value) => {
            onChangeText({name: 'firstName', value: value});
          }}
          placeholder="Enter First name"
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={(value) => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({
                  ...form,
                  phoneCode: phoneCode,
                  countryCode: cCode,
                });
              }}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          onChangeText={(value) => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          error={error?.phone_number?.[0]}
          label="Phone number"
          placeholder="Enter Phone number"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>
          <Switch
            trackColor={{false: colors.grey, true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}></Switch>
        </View>

        <CustomButton
          loading={loading}
          disable={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  );
};

export default CreateContactComponent;
