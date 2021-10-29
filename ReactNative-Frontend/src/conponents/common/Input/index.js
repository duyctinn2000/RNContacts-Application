import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition == 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };
  const getBoderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    }
    return colors.grey;
  };
  return (
    <View style={styles.inputContainer}>
      <View>{label && <Text>{label}</Text>}</View>
      <View
        style={[
          styles.wrapper,
          {borderColor: getBoderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View style={icon && {alignSelf: 'center'}}>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}> {error} </Text>}
    </View>
  );
};

export default Input;
