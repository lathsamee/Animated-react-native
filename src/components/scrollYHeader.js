import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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

  const menu = [
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
    {name: 'fish'},
  ];

  const items = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten ',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty ',
    'twenty-one',
    'twenty-two',
    'twenty-three',
    'twenty-four',
    'twenty-five',
    'twenty-six',
    'twenty-seven',
    'twenty-eight',
    'twenty-nine',
    'thirty',
    'thirty-one',
    'thirty-two',
    'thirty-three',
    'thirty-four',
    'thirty-five',
    'thirty-six',
    'thirty-seven',
    'thirty-eight',
    'thirty-nine',
    'forty',
  ];

  const [buttons, setButtons] = useState(0);
  const arr = [];

  // * animated
  const scrollY = new Animated.Value(0);
  const getValue = () =>
    scrollY.addListener((data) =>
      console.log('%c value:', 'color: green; font-size: 13px', data),
    );
  useEffect(() => {
    getValue();
  }, []);
  // console.log('%c get Animated value:', 'color: green; font-size: 13px', value);
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
        <ScrollView
          horizontal={true}
          style={{top: 220, backgroundColor: 'green', padding: 10}}>
          {menu.map(({name}, index) => (
            <TouchableOpacity
              style={{backgroundColor: 'red', margin: 10, height: 30}}
              key={index}>
              <Text> {name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {items.map((value, i) => {
          return (
            <View
              key={i}
              style={{
                height: 10,
                margin: 10,
                top: 220,
                backgroundColor: 'gray',
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
              onLayout={Animated.event([
                {
                  nativeEvent: {
                    layout: {
                      height: 230,
                    },
                  },
                },
              ])}>
              <Text>{value}</Text>
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
