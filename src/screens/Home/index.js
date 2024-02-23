/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */


import {Image, ScrollView, Text, View} from 'react-native';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';
import colors from '../../components/common/colors';
import CustomSearch from '../../components/CustomSearch';
import Categories from './components/Categories';
import Banners from './components/Banners';
import BestForYou from './components/BestForYou';

const Home = () => {
  return (
    <DrawerSceneWrapper>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <ScrollView>
          <View>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 10,
                color: colors.grey,
                padding: 15,
                paddingBottom: 2,
              }}>
              Location
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  color: colors.black,
                }}>
                Jakarta
              </Text>
              <Image
                source={require('../../assets/images/down-arrow.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  left: 3,
                  top: 5,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 3,
                  backgroundColor: 'red',
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  zIndex: 9,
                }}></View>
              <Image
                source={require('../../assets/images/notification.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  right: 10,
                }}
              />
            </View>
          </View>
          <CustomSearch />
          <Categories/>
          <Banners/>
          <BestForYou/>
        </ScrollView>
      </View>
    </DrawerSceneWrapper>
  );
};

export default Home;
