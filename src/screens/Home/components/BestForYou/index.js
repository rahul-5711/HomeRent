/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import colors from '../../../../components/common/colors';
import CommonSectionHeader from '../../../../components/CommonSectionHeader';

const BestForYou = () => {
  const [homes, setHomes] = useState();
  useEffect(() => {
    getHomes();
  }, []);

  const getHomes = async () => {
    await firestore()
      .collection('Homes')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setHomes(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: colors.white,
      }}>
      <CommonSectionHeader head={'Best for you'} rightText={'See more'} />
      <View>
        <FlatList
          data={homes}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => {
            String(index);
          }}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

const RenderItem = ({item, index}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        padding: 15,
        marginRight: 15,
        //marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        overflow: 'hidden',
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: 85,
          height: 75,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 10,
          borderRadius:20,
        }}
      />
      <View>
        <Text
          style={{
            color: colors.black_level_1,
            fontFamily: 'Lato-Bold',
            fontSize: 20,
            marginLeft: 20,
            lineHeight:20
          }}
          numberOfLines={1}>
          {item.homeName}
        </Text>
        <Text
          style={{
            color: colors.primaryBlue,
            fontFamily: 'Lato-Regular',
            fontSize: 16,
            marginLeft: 20,
            lineHeight:20
          }}
          numberOfLines={2}>
          Rp {item.rentAmount}/year
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Image
              source={require('../../../../assets/images/slumber.png')}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Lato-Regular',
                fontSize: 13,
                marginLeft: 10,
                lineHeight:20
              }}>
              {item.numOfBed} Bedroom
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Image
              source={require('../../../../assets/images/bath.png')}
              style={{height: 18, width: 18, resizeMode: 'contain'}}
            />
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Lato-Regular',
                fontSize: 13,
                marginLeft: 10,
                lineHeight:20
              }}>
              {item.numOfBath} Bathroom
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BestForYou;
