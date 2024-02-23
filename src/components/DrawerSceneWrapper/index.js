/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const DrawerSceneWrapper = ({children}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(progress.value, [0, 2], [1, 0.8], 'clamp')}],
    borderRadius:20,
    overflow:'hidden',
  }));

  return <Animated.View 
  style={[styles.container, animatedStyle]}>
  {children}</Animated.View>;
};

export default DrawerSceneWrapper;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
