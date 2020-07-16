import React, {useEffect, useState} from 'react';
import {Animated, Text, View, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Theme} from '../../utils';
const Info = ({Y, name}) => {
  const opacity = Y.interpolate({
    inputRange: [0, 120],
    outputRange: [1, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  const top = Y.interpolate({
    inputRange: [0, 120],
    outputRange: [120, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  const grandY = Y.interpolate({
    inputRange: [0, 140],
    outputRange: [10, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  const grandX = Y.interpolate({
    inputRange: [0, 160],
    outputRange: [0, 140],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        opacity: opacity,
        top: top,
        zIndex: 100,
        borderRadius: 20,
        height: 120,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        transform: [{translateY: grandY}],
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Animated.Text
          style={{
            transform: [{translateX: grandX}],
            fontSize: Theme.fontLarge,
          }}>
          {name}
        </Animated.Text>
        <Text>100+</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>ເຂົ້າປຽກ, ຕຳປູ, ຕຳປາ</Text>
        <Text>20-25min</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FontAwesome5 name={'facebook'} />
        <Text>Promotion</Text>
      </View>
    </Animated.View>
  );
};
export default Info;
