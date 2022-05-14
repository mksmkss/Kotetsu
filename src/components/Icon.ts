import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IconProps {
  MaterialCommunityIcons: typeof MaterialCommunityIcons
  SimpleLineIcons: typeof SimpleLineIcons
  MaterialIcons: typeof MaterialIcons
  FontAwesome: typeof FontAwesome
  FontAwesome5: typeof FontAwesome5
  Foundation: typeof Foundation
  EvilIcons: typeof EvilIcons
  Ionicons: typeof Ionicons
  Octicons: typeof Octicons
  Feather: typeof Feather
  Entypo: typeof Entypo
  Zocial: typeof Zocial
  Fontisto: typeof Fontisto
  AntDesign: typeof AntDesign
}

const Icon: IconProps = {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Foundation,
  EvilIcons,
  Ionicons,
  Octicons,
  Feather,
  Entypo,
  Zocial,
  Fontisto,
  AntDesign,
};

export default Icon;
export { Icon, IconProps };
