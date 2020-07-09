import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HeaderImage from './headerImage';
import HeaderTitle from './headerTitle';
import Info from './info';

const scrollYHeader = (props) => {
  const NAME_ = 'Papaya PokPok';
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

  return (
    <View style={{flex: 1}}>
      <HeaderImage Y={scrollY} />
      <HeaderTitle Y={scrollY} name={NAME_} />
      <Info Y={scrollY} name={NAME_} />

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
