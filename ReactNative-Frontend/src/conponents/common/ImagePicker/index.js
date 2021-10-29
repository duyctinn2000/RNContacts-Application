import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';
import ImageCropPicker from 'react-native-image-crop-picker';
const ImagePicker = forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {
        ImageCropPicker.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImageCropPicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={200}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 30,
          alignItems: 'center',
        },
      }}>
      <View style={styles.wrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOption}
            key={name}>
            {icon}
            <Text style={styles.text}> {name} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});
export default ImagePicker;
