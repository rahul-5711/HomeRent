/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import colors from '../common/colors';

const CustomSearch = props => {
  const {onChangeText = {}} = {...props};
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          padding: 5,
          borderColor: colors.primaryGreen,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          width: '80%',
          backgroundColor: colors.lightGrey,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/search.png')}
            style={{width: 22, height: 22, resizeMode: 'contain'}}
          />
          <TextInput
            placeholder="Search address, or near you"
            placeholderTextColor={colors.black_level_3}
            style={{
              flex: 1,
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              marginLeft: 12,
              color: colors.primaryBlue,
            }}
          />
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/setting.png')}
          style={{width: 50, height: 50, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearch;
