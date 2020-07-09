import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Animated,
  Image,
} from 'react-native';
import HeaderImage from './HeaderImage';

const UberEats = (props) => {
  useEffect(() => {}, []);
  const [tabs, setTabs] = useState('defaultTabs');
  const scrollY = new Animated.Value(0);
  const scrollView = useRef(null);

  const image = [
    {id: 2, uri: require('../../image/logo_shop.png')},
    {id: 3, uri: require('../../image/noInternet.png')},
    {id: 4, uri: require('../../image/shop.png')},
    {id: 5, uri: require('../../image/shop-icon.png')},
    {id: 6, uri: require('../../image/shop1.png')},
    {id: 1, uri: require('../../image/goteddy-bg.png')},
  ];

  return (
    <View style={styles.container}>
      <HeaderImage Y={scrollY} />
      <Animated.ScrollView
        scrollEventThrottle={1}
        ref={scrollView}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        {/* <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs(...{tabs});
          }}
        /> */}
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
      {/* <Header {...{tabs}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UberEats;
