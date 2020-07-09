import React from 'react';
import {Dimensions, StyleSheet, Animated} from 'react-native';
// import {Animated} from 'react-native-reanimated';

const HeaderImage = ({Y}) => {
  const {height, width} = Dimensions.get('window');
  const HEADER_IMAGE_HEIGHT = height / 3.5;
  const backgroundImage = require('../../image/feature_graphic.png');

  const heights = Y.interpolate({
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
    extrapolateRight: 'clamp',
  });
  const top = Y.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: 'clamp',
  });

  return (
    <Animated.Image
      source={backgroundImage}
      style={[styles.image, {height: heights, width: width, top: top}]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
});
export default HeaderImage;
