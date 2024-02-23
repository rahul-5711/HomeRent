/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';
import colors from '../../components/common/colors';

const Profile = () => {
  return (
    <DrawerSceneWrapper>
    <View style={{backgroundColor:colors.white,flex:1}}>
      <Text>Profile</Text>
    </View>
    </DrawerSceneWrapper>
  );
};

export default Profile;
