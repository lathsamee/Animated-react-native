import React, {useRef, useState} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

export default function App() {
  const image = [
    {id: 2, uri: require('./src/image/logo_shop.png')},
    {id: 3, uri: require('./src/image/noInternet.png')},
    {id: 4, uri: require('./src/image/shop.png')},
    {id: 5, uri: require('./src/image/shop-icon.png')},
    {id: 6, uri: require('./src/image/shop1.png')},
    {id: 1, uri: require('./src/image/goteddy-bg.png')},
  ];

  const HEADER_HIGH = 70;

  // * ກຳນົດຄ່າ ເລີ່ມຕົ້ນ ຂອງ header
  const scrollY = new Animated.Value(0);

  // * ສ້າງເພື່ອ ກຳນົດຄ່າ ອະນິເມດ ຕອນເລື່ອນລົງສຸດທ້າຍ ແບບເລື່ອນໄປໄກໆ ລະເລື່ອນຂື້ນບາດດຽວ ເຮດເດີ້ ຈະຂື້ນມາເລີຍ
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HIGH);

  // * ກຳນົດໃຫ້ ເຮດເດີ້ ຫາຍໄປ
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HIGH],
    outputRange: [0, -HEADER_HIGH],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          buttom: 0,
          right: 0,
          backgroundColor: 'gray',
          height: HEADER_HIGH,
          zIndex: 1000,
          elevation: 1000,
          transform: [
            {
              translateY: headerY,
            },
          ],
        }}
      />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        {image.map((value) => {
          return (
            <View key={value.id} style={{height: 400, margin: 10}}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
