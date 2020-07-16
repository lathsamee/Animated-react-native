import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Animated} from 'react-native';
import {Theme} from '../../utils';

const HeaderTitle = ({Y, name}) => {
  // * header background color
  const background = Y.interpolate({
    inputRange: [0, 200],
    outputRange: ['rgba(255,255,255,0.0)', '#2fd1c9'],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  // * opacity title
  const opacity = Y.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [0, 0.1, 50],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={{
        height: 70,
        backgroundColor: background,
        width: '100%',
        alignItem: 'center',
        justifyContent: 'center',
        zIndex: 200,
        elevation: 200,
      }}>
      <View style={{position: 'absolute', left: 7}}>
        <FontAwesome5 name={'angle-left'} brand size={30} />
      </View>
      <View style={{position: 'absolute', right: 7}}>
        <FontAwesome5 name={'calendar-plus'} brand size={30} />
      </View>
      <Animated.Text
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: 16,
          opacity: opacity,
          fontSize: Theme.fontXLarge,
        }}>
        {name}
      </Animated.Text>
    </Animated.View>
  );
};
export default HeaderTitle;
