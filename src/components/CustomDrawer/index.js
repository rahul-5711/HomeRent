/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../common/colors';
import {useState} from 'react';

const DrawerItem = ({
  itemName,
  navigateTo,
  icon,
  selected,
  showNotificationDot,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        backgroundColor: selected ? colors.white : 'transparent',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        right: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          right: -10,
        }}>
        {showNotificationDot && (
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 15,
              backgroundColor: 'red',
              width: 8,
              height: 8,
              borderRadius: 5,
              zIndex:9,
            }}></View>
        )}
        <Image
          source={icon}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
        <Text
          style={{
            color: selected ? colors.primaryBlue : colors.white,
            fontSize: 18,
            fontFamily: 'Lato-Regular',
            padding: 10,
          }}>
          {itemName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CustomDrawer = () => {
  const [selectedItem, setSelectedItem] = useState('Home');
  return (
    <View
      style={{
        top: 60,
        margin: 20,
      }}>
      <View>
        <DrawerItem
          itemName="Home"
          navigateTo="Home"
          icon={require('../../assets/images/home.png')}
          selected={selectedItem === 'Home'}
        />
        <DrawerItem
          itemName="Profile"
          navigateTo="Profile"
          icon={require('../../assets/images/person.png')}
          selected={selectedItem === 'Profile'}
        />
        <DrawerItem
          itemName="Nearby"
          navigateTo="Drawer"
          icon={require('../../assets/images/location.png')}
          selected={selectedItem === 'Nearby'}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.white,
            right: 20,
          }}></View>
        <DrawerItem
          itemName="Bookmark"
          navigateTo="Drawer"
          icon={require('../../assets/images/bookmark.png')}
          selected={selectedItem === 'Bookmark'}
        />
        <DrawerItem
          itemName="Notification"
          navigateTo="Drawer"
          icon={require('../../assets/images/notification.png')}
          selected={selectedItem === 'Notification'}
          showNotificationDot={true}
        />
        <DrawerItem
          itemName="Message"
          navigateTo="Drawer"
          icon={require('../../assets/images/message.png')}
          selected={selectedItem === 'Message'}
          showNotificationDot={true}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.white,
            right: 20,
          }}></View>
        <DrawerItem
          itemName="Settings"
          navigateTo="Drawer"
          icon={require('../../assets/images/settings.png')}
          selected={selectedItem === 'Settings'}
        />
        <DrawerItem
          itemName="Help"
          navigateTo="Drawer"
          icon={require('../../assets/images/question.png')}
          selected={selectedItem === 'Help'}
        />
        <DrawerItem
          itemName="Logout"
          navigateTo="Drawer"
          icon={require('../../assets/images/on-off-button.png')}
          selected={selectedItem === 'Logout'}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;
