import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  VirtualizedList,
  Animated,
} from 'react-native';
import Axios from 'axios';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const App = () => {
  const scrollY = new Animated.Value(0);
  const [datas, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const {data} = await Axios.get(
      'https://jsonplaceholder.typicode.com/photos',
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
      }}>
      <Image
        source={{uri: item.url}}
        style={{width: 130, height: 130, borderRadius: 10}}
      />
      <Text style={{marginLeft: 20}}>{item.title}</Text>
    </View>
  );
  const renderItemHeader = ({item}) => (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginRight: 10,
      }}>
      <Image
        source={{uri: item.url}}
        style={{width: 110, height: 110, borderRadius: 10}}
      />
    </View>
  );

  const Y = () => {
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedFlatList
        data={datas}
        renderItem={renderItemContent}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
        // * on scroll
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        ListHeaderComponent={
          <FlatList
            horizontal
            backgroundColor={'#fff'}
            data={datas}
            renderItem={renderItemHeader}
            keyExtractor={(item) => item.id}
          />
        }
        // ListFooterComponent={

        // }
      />
      <Animated.View
        style={{
          width: 300,
          height: 150,
          borderRadius: 20,
          backgroundColor: 'green',
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 140],
                ouputRange: [0, 140],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Text>Header view hide When Scroll</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
