import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Axios from 'axios';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderItemContent}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
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
