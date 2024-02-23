/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../../components/common/colors';
import {useState} from 'react';

const Categories = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const Contents = [
    {
      itemid: 0,
      itemName: 'House',
    },

    {
      itemid: 1,
      itemName: 'Apartment',
    },
    {
      itemid: 2,
      itemName: 'Villa',
    },
    {
      itemid: 3,
      itemName: 'Hotel',
    },
    {
      itemid: 4,
      itemName: 'House',
    },
    {
      itemid: 5,
      itemName: 'Apartment',
    },
    {
      itemid: 6,
      itemName: 'Hotel',
    },
    {
      itemid: 7,
      itemName: 'Villa',
    },
    {
      itemid: 8,
      itemName: 'House',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 15,
        margin: 10,
        padding: 10,
      }}>
      <FlatList
        data={Contents}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectedItem === item.itemid
                    ? colors.primaryBlue
                    : colors.lightGrey,
                padding: 7,
                margin: 5,
                borderRadius: 10,
              }}
              onPress={() => setSelectedItem(item.itemid)}>
              <Text
                style={{
                  color:
                    selectedItem === item.itemid ? colors.white : colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 15,
                }}>
                {item.itemName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
