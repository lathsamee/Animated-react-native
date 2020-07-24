import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  ActivityIndicator,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ScrollIndex = (props) => {
  let scrollOffsetY_ref = null;
  let scrollOffsetX_ref = null;
  let offsetY = [];
  let offsetX = [];
  let activeIndex = 1;
  const [datas, setData] = useState([]);
  const [active, setActive] = useState(1);
  const [isScroll, setIsScroll] = useState(true);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: false,
    listener: (event) => handleScroll(event),
  });

  const handleScroll = (event) => {
    let scrollOffsetY = parseInt(event.nativeEvent.contentOffset.y);
    let offset = offsetY.findIndex((data) => data >= scrollOffsetY);

    if (isScroll) {
      if (activeIndex !== offset) {
        if (offset === -1 || offset === 0) {
          activeIndex = 1;
          setActive(1);
          scrollOffsetX_ref.scrollToOffset({
            offset: offsetX[offset],
            // x: offsetX[0],
            // y: 0,
            animated: true,
          });
        } else if (offset >= 1) {
          activeIndex = offset;
          setActive(offset);
          scrollOffsetX_ref.scrollToOffset({
            offset: offsetX[offset],
            // x: offsetX[offset],
            // y: 0,
            animated: true,
          });
        } else if (offset !== -2) {
          activeIndex = offset;
          setActive(offset);
          scrollOffsetX_ref.scrollToOffset({
            offset: offsetX[offset],
            // x: offsetX[offset],
            // y: 0,
            animated: true,
          });
        }
      }
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const {data} = await Axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setData(data);
  };
  const renderItemContent = ({item}) => (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        // padding: 50,
        backgroundColor: active === item.id ? 'red' : 'pink',
        width: '100%',
        height: 100,
      }}
      onLayout={(event) => {
        let y = parseInt(event.nativeEvent.layout.y);
        offsetY[item.id] = y;
      }}>
      {/* <Image
        source={{uri: item.url}}
        style={{width: 130, height: 130, borderRadius: 10}}
      /> */}
      <Text style={{marginLeft: 20}}>{item.id}</Text>
      <Text style={{marginLeft: 20}}>{item.name}</Text>
      <Text style={{marginLeft: 20}}>{item.username}</Text>
      <Text style={{marginLeft: 20}}>{item.email}</Text>
    </View>
  );
  const renderItemHeader = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginRight: 10,
        backgroundColor: active === item.id ? 'red' : 'yellow',
      }}
      onLayout={(event) => {
        const x = event.nativeEvent.layout.x;
        offsetX[item.id] = parseInt(x);
      }}
      onPress={async () => {
        if ((activeIndex === item.id) !== true) {
          await setIsScroll(false);
          await scrollToIndexs(item.id);
        }
      }}>
      {/* <Image
        source={{uri: item.url}}
        style={{width: 110, height: 110, borderRadius: 10}}
      /> */}

      <Text style={{marginLeft: 20}}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderEmtryComponent = () => <ActivityIndicator size="large" />;

  return <div> Hiii HOOK TO</div>;
};

export default ScrollIndex;
