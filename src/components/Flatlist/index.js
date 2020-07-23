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
} from 'react-native';
import Axios from 'axios';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const App = () => {
  let flatListRef = null;
  console.log('%c flatListRef:', 'color: green; font-size: 13px', flatListRef);
  const [datas, setData] = useState([]);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: false,
    listener: (event) => handleScroll(event),
  });

  const handleScroll = (event) => {
    let scroll = event.nativeEvent.contentOffset.y;
    // console.log('%c scroll:', 'color: green; font-size: 13px', scroll);
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
        backgroundColor: 'pink',
        width: '100%',
        height: 100,
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
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginRight: 10,
        backgroundColor: 'yellow',
      }}>
      {/* <Image
        source={{uri: item.url}}
        style={{width: 110, height: 110, borderRadius: 10}}
      /> */}

      <Text style={{marginLeft: 20}}>
        {item.id}
        {item.name}
      </Text>
    </View>
  );
  const renderEmtryComponent = () => <ActivityIndicator size="large" />;
  // const getLayount = (data, index) =>
  //   console.log(
  //     '%c  ({length:10, offset: 10*index, index}):',
  //     'color: green; font-size: 13px',
  //     {length: 10, offset: 10 * index, index},
  //   );

  const scrollToIndexs = () => {
    flatListRef.scrollToIndex({animated: true, index: 4});
  };
  example1 = () => {
    return (
      <AnimatedFlatList
        style={{
          top: y.interpolate({
            inputRange: [0, 160],
            outputRange: [160, 30],
            extrapolate: 'clamp',
          }),
        }}
        // debug={true}
        ref={(ref) => (flatListRef = ref)}
        bounces={false}
        scrollEventThrottle={16}
        data={datas}
        renderItem={renderItemContent}
        initialNumToRender={datas.length}
        getItemLayout={(data, index) => ({
          length: 123,
          offset: 123 * index,
          index,
        })}
        // onMomentumScrollEnd={(event) =>
        //   console.log(
        //     '%c event.contentOffset.y:',
        //     'color: green; font-size: 13px',
        //     event.nativeEvent.contentOffset.y,
        //   )
        // }
        keyExtractor={(item) => item.id.toString()}
        {...{onScroll}}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <FlatList
            horizontal
            backgroundColor={'#fff'}
            data={datas}
            renderItem={renderItemHeader}
            keyExtractor={(item) => item.id.toString()}
          />
        }
        ListEmptyComponent={renderEmtryComponent}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          width: 350,
          height: 150,
          borderRadius: 20,
          marginBottom: 20,
          backgroundColor: 'green',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          top: y.interpolate({
            inputRange: [0, 160],
            outputRange: [50, -160],
            extrapolate: 'clamp',
          }),
          position: 'absolute',
          zIndex: 100,
        }}>
        <Text>Header</Text>
      </Animated.View>
      <Button
        style={{zIndex: 1000, position: 'absolute'}}
        title="ScrollIndex"
        onPress={scrollToIndexs}
      />
      {example1()}
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
example2 = () => {
  return (
    <ScrollView>
      <View>
        <FlatList
          nestedScrollEnabled={true}
          data={datas}
          renderItem={renderItemContent}
          keyExtractor={(item) => item.id.toString()}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <FlatList
              horizontal
              backgroundColor={'#fff'}
              data={datas}
              renderItem={renderItemHeader}
              keyExtractor={(item) => item.id.toString()}
            />
          }
          ListEmptyComponent={renderEmtryComponent}
        />
      </View>
    </ScrollView>
  );
};
example3 = () => {
  return (
    <ScrollView>
      {datas.length > 0 ? (
        datas.map((data, i) => {
          return (
            <View key={i}>
              <View
                key={data.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 20,
                }}>
                <Image
                  source={{uri: data.url}}
                  style={{width: 130, height: 130, borderRadius: 10}}
                />
                <Text style={{marginLeft: 20}}>{data.title}</Text>
              </View>
            </View>
          );
        })
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ScrollView>
  );
};
