import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  logoImage: {
    width: '150@s',
    height: '150@s',
    alignSelf: 'center',
    marginTop: '50@s',
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  form: {paddingTop: 20},
  createSection: {flexDirection: 'row'},
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: '16@s',
  },
  infoText: {
    fontSize: '16@s',
  },
});
