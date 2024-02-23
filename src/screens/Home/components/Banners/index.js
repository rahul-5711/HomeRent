/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import colors from '../../../../components/common/colors';

const Banners = () => {
  const [bannerItems, setbannerItems] = useState([]);
  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    await firestore()
      .collection('Banners')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              result.push(doc.data());
            }
          });
          setbannerItems(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <FlatList
        data={bannerItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <ImageBackground
              source={{uri: item.image}}
              style={{
                width: 250,
                height: 250,
                resizeMode: 'contain',
                borderRadius: 15,
                overflow: 'hidden',
                margin: 15,
              }}>
              <View
                style={{
                  padding: 15,
                  top: 170,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: 'Lato-Black',
                    fontSize: 22,
                  }}>
                  {item.head}
                </Text>
                <Text
                  style={{
                    color: colors.white_level_3,
                    fontFamily: 'Lato-Regular',
                    fontSize: 16,
                    top: 10,
                  }}>
                  {item.desc}
                </Text>
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};

export default Banners;
