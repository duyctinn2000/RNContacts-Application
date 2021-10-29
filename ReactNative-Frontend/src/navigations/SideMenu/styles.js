import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    paddingLeft: 20,
    paddingVertical: 7,
  },
});
