import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.white,
  },
  name: {
    alignSelf: 'center',
    fontSize: 23,
  },
  content: {
    padding: 20,
  },
});
