import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disable,
  loading,
  onPress,
}) => {
  const getBackgroundColor = () => {
    if (disable) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    } else if (danger) {
      return colors.danger;
    } else if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}]}
      disabled={disable}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disable ? 'black' : colors.white,
              paddingLeft: {loading} && 5,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
