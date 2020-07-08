import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';

const scrollYHeader = (props) => {
  const NAME_ = 'Papaya PokPok';
  const imgHeader = require('../image/feature_graphic.png');
  const image = [
    {id: 2, uri: require('../image/logo_shop.png')},
    {id: 3, uri: require('../image/noInternet.png')},
    {id: 4, uri: require('../image/shop.png')},
    {id: 5, uri: require('../image/shop-icon.png')},
    {id: 6, uri: require('../image/shop1.png')},
    {id: 1, uri: require('../image/goteddy-bg.png')},
  ];

  // * animated
  const scrollY = new Animated.Value(0);

  // * header opacity
  const opacityContent = scrollY.interpolate({
    inputRange: [0, 140],
    outputRange: [1, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  // * header background color
  const backgroundHeaderColor = scrollY.interpolate({
    inputRange: [0, 140],
    outputRange: ['rgba(255,255,255,0.0)', '#2ea9'],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  // * opacity title
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, 50, 105, 150],
    outputRange: [0, 0.1, 0.5, 1],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  const contentMarginTop = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [120, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  const contentTop = scrollY.interpolate({
    inputRange: [0, 140],
    outputRange: [10, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <View style={{flex: 1}}>
      <Animated.Image
        style={{
          height: 200,
          width: '100%',
          top: 0,
          alignSelf: 'center',
          position: 'absolute',
          opacity: opacityContent,
        }}
        source={imgHeader}
      />
      <Animated.View
        style={{
          height: 70,
          backgroundColor: backgroundHeaderColor,
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
            opacity: headerTitleOpacity,
          }}>
          {NAME_}
        </Animated.Text>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          opacity: opacityContent,
          top: contentMarginTop,
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
          transform: [{translateY: contentTop}],
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{NAME_}</Text>
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

      <Animated.ScrollView
        stickyHeaderIndices={[0]}
        overScrollMode={'never'}
        style={{zIndex: 10}}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <View style={{top: 220, backgroundColor: 'green'}}>
          <Text>
            Open the Rendering tab and use the new Emulate vision deficiencies
            feature to get a better idea of how people with different types of
            vision deficiencies experience your site
          </Text>
        </View>
        {image.map((value) => {
          return (
            <View key={value.id} style={{height: 300, margin: 10, top: 250}}>
              <Image
                source={value.uri}
                style={{flex: 1, width: null, height: null, borderRadius: 20}}
              />
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
export default scrollYHeader;
