/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../common/colors';

const CommonSectionHeader = props => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Shop', {type: 'all'});
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'Lato-Bold',
            fontSize: 22,
            color: colors.black,
          }}>
          {props.head}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'Lato-Regular',
          fontSize: 18,
          color: colors.grey,
        }}
        onPress={handleNavigate}>
        {props.rightText}
      </Text>
    </View>
  );
};

export default CommonSectionHeader;
