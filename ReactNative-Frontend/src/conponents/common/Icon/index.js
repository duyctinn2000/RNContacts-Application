import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MeterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import React from 'react';
const getIconFont = (type) => {
  switch (type) {
    case 'Fontisto':
      return FontistoIcon;
    case 'Feather':
      return FeatherIcon;
    case 'AntDesign':
      return AntDesignIcon;
    case 'FontAwesome5':
      return FontAwesome5Icon;
    case 'FontAwesome':
      return FontAwesomeIcon;
    case 'SimpleLineIcon':
      return SimpleLineIcon;
    case 'EvilIcon':
      return EvilIcon;
    case 'Entypo':
      return EntypoIcon;
    case 'Foundation':
      return FoundationIcon;
    case 'Ionicon':
      return IoniconIcon;
    case 'MeterialCommunity':
      return MeterialCommunityIcon;
    case 'Octicon':
      return OcticonIcon;
    case 'Zocial':
      return ZocialIcon;
    default:
      return MaterialIcon;
  }
};

const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type);
  return <FontIcon {...props} />;
};

export default Icon;
