import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  madalView: {
    marginHorizontal: 20,
    borderRadius: 4,
    backgroundColor: colors.white,
    minHeight: 300,
  },
  separator: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 250,
  },
});
