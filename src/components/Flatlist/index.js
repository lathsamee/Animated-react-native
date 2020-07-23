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
} from 'react-native';
import Axios from 'axios';

const App = () => {
  const [datas, setData] = useState([]);
  const [isScroll, setIsscroll] = useState(true);
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
  const renderEmtryComponent = () => <ActivityIndicator size="large" />;

  example1 = () => {
    return (
      <FlatList
        data={datas}
        renderItem={renderItemContent}
        keyExtractor={(item) => item.id.toString()}
        stickyHeaderIndices={[2]}
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

  console.log('%c isScroll:', 'color: green; font-size: 13px', isScroll);
  return (
    <SafeAreaView style={styles.container}>
      {example1()}
      {/* {example2()} */}
      {/* {example3()} */}
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
