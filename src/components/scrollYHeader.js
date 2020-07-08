import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Image, ScrollView} from 'react-native';

const HeaderY = (props) => {
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
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          height: 200,
          width: '100%',
          top: 0,
          alignSelf: 'center',
          position: 'absolute',
        }}
        source={imgHeader}
      />
      <View style={{position: 'absolute', left: 7}}>
        <FontAwesome5 name={'angle-left'} brand size={30} />
      </View>
      <View style={{position: 'absolute', right: 7}}>
        <FontAwesome5 name={'calendar-plus'} brand size={30} />
      </View>
      <Text
        style={{textAlign: 'center', justifyContent: 'center', fontSize: 16}}>
        {NAME_}
      </Text>

      <View
        style={{
          position: 'absolute',
          top: 140,
          zIndex: 1000,
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
      </View>

      <ScrollView>
        {image.map((value) => {
          return (
            <View key={value.id} style={{height: 300, margin: 10, top: 500}}>
              <Image
                source={value.uri}
                style={{flex: 1, width: null, height: null, borderRadius: 20}}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default HeaderY;
