import React from 'react';
import {Animated} from 'react-native';
const HeaderImage = ({Y}) => {
  const imgHeader = require('../../image/feature_graphic.png');
  const opacity = Y.interpolate({
    inputRange: [0, 140],
    outputRange: [1, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <Animated.Image
      style={{
        height: 200,
        width: '100%',
        top: 0,
        alignSelf: 'center',
        position: 'absolute',
        opacity: opacity,
      }}
      source={imgHeader}
    />
  );
};
export default HeaderImage;
