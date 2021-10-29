import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER} from '../../constants/routeName';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({
  error,
  form,
  justRegister,
  onChange,
  onSubmit,
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
        <Text style={styles.subTitle}> Please login here </Text>

        <View style={styles.form}>
          {justRegister && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid credentials"
            />
          )}
          {error?.error && (
            <Message retry onDismiss={() => {}} danger message={error?.error} />
          )}

          <Input
            label="Username"
            placeholder="Enter Username"
            value={form.userName || null}
            onChangeText={(value) => onChange({name: 'userName', value})}
            // error={'This field is required'}
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
          />
          <CustomButton
            loading={loading}
            disable={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
