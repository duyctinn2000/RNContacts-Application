import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN} from '../../constants/routeName';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
  const {navigate} = useNavigation();
  const [secureText, setSecureText] = useState(true);
  const toggleSecureTextEntry = () => {
    if (secureText) {
      setSecureText(false);
    } else {
      setSecureText(true);
    }
  };
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}> Welcome to RNContacts </Text>
        <Text style={styles.subTitle}> Create a free account </Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              message={error?.error}
              danger
              retry
              retryFn={onSubmit}></Message>
          )}
          <Input
            label="First name"
            placeholder="Enter First name"
            onChangeText={(value) => onChange({name: 'firstName', value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last name"
            placeholder="Enter Last name"
            onChangeText={(value) => onChange({name: 'lastName', value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={(value) => onChange({name: 'email', value})}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => onChange({name: 'userName', value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="Password"
            icon={
              <TouchableOpacity onPress={() => toggleSecureTextEntry()}>
                <Text> {secureText ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            placeholder="Enter Password"
            secureTextEntry={secureText}
            iconPosition="right"
            onChangeText={(value) => onChange({name: 'passWord', value})}
            error={errors.passWord || error?.password?.[0]}
          />
          {console.log(error)}
          <CustomButton
            loading={loading}
            disable={loading}
            onPress={() => onSubmit()}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have a account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
