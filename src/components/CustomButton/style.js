/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../common/colors';

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    top:25,
    //marginVertical: width * 0.025,
    flexDirection: 'row',
  },
  icon: {
    width: width * 0.078,
    height: width * 0.08,
    marginRight: width * 0.025,
  },
});

export default style;
