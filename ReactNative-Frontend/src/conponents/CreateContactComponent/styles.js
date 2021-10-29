import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageView: {
    width: 150,
    alignSelf: 'center',
    borderRadius: 100,
    height: 150,
  },
  chooseText: {
    color: colors.primary,
    alignSelf: 'center',
  },
});
