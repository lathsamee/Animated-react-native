import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import {Container, Content, Header} from 'native-base';
import {TabView, TabBar} from 'react-native-tab-view';
import FlatList from './components/FlatList';

const TabBarHeight = 48;
const HeaderHeight = 140;
const tab1ItemSize = Dimensions.get('window').width - 20;
const tab2ItemSize = Dimensions.get('window').width - 20;

const App = () => {
  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tab1', title: 'Tab1'},
    {key: 'tab2', title: 'Tab2'},
  ]);
  const [tab1Data] = useState(Array(10).fill(0));
  const [tab2Data] = useState(Array(30).fill(0));
  const scrollY = useRef(new Animated.Value(0)).current;
  let listRefArr = useRef([]);
  let listOffset = useRef({});
  let isListGliding = useRef(false);

  useEffect(() => {
    scrollY.addListener(({value}) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });
    return () => {
      scrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  const syncScrollOffset = () => {
    const curRouteKey = routes[tabIndex].key;

    listRefArr.current.forEach((item) => {
      if (item?.key !== curRouteKey) {
        if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
          if (item?.value) {
            item?.value.getNode().scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });
            listOffset.current[item?.key] = scrollY._value;
          }
        } else if (scrollY._value >= HeaderHeight) {
          if (
            listOffset.current[item?.key] < HeaderHeight ||
            listOffset.current[item?.key] == null
          ) {
            if (item?.value) {
              item?.value.getNode().scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });
              listOffset.current[item?.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [0, -HeaderHeight],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View style={[styles.header, {transform: [{translateY: y}]}]}>
        <Text>{'Tier'}</Text>
      </Animated.View>
    );
  };

  const rednerTab1Item = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 16,
          width: tab1ItemSize,
          height: 180,
          backgroundColor: '#aaa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{index}</Text>
      </View>
    );
  };

  const rednerTab2Item = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 16,
          width: tab2ItemSize,
          height: 180,
          backgroundColor: '#aaa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{index}</Text>
      </View>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <Text style={[styles.label, {opacity: focused ? 1 : 0.5}]}>
        {route.title}
      </Text>
    );
  };

  const renderCategoryTab1 = () => {
    return (
      <View>
        <Text>Category List</Text>
      </View>
    );
  };
  const renderCategoryTab2 = () => {
    return <View style={{height: 10}} />;
  };

  const renderScene = ({route}) => {
    const focused = route.key === routes[tabIndex].key;
    let data;
    let renderItem;
    let headerComponent;
    switch (route.key) {
      case 'tab1':
        data = tab1Data;
        renderItem = rednerTab1Item;
        headerComponent = renderCategoryTab1;
        break;
      case 'tab2':
        data = tab2Data;
        renderItem = rednerTab2Item;
        headerComponent = renderCategoryTab2;
        break;
      default:
        return null;
    }
    return (
      <FlatList
        TabBarHeight={TabBarHeight}
        HeaderHeight={HeaderHeight}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={headerComponent}
        scrollY={scrollY}
        isListGliding={(status) => isListGliding.current(status)}
        syncScrollOffset={() => syncScrollOffset()}
        onGetRef={(ref) => {
          if (ref) {
            const found = listRefArr.current.find((e) => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
      />
    );
  };

  const renderTabBar = (props) => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{translateY: y}],
          width: '100%',
        }}>
        <TabBar
          {...props}
          onTabPress={({route, preventDefault}) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        onIndexChange={(index) => setIndex(index)}
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: Dimensions.get('window').width,
        }}
      />
    );
  };

  return (
    <Container>
      <Header style={{zIndex: 1000}}>
        <View>
          <Text>Header</Text>
        </View>
      </Header>
      <View style={{flex: 1, zIndex: -10}}>
        {/* {renderTabView()} */}

        <TabView
          onIndexChange={(index) => setIndex(index)}
          navigationState={{index: tabIndex, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          initialLayout={{
            height: 0,
            width: Dimensions.get('window').width,
          }}
        />

        {renderHeader()}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    height: 140,
    width: '100%',
    backgroundColor: '#40C4FF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  label: {fontSize: 16, color: '#222'},
  tab: {elevation: 0, shadowOpacity: 0, backgroundColor: '#FFCC80'},
  indicator: {backgroundColor: '#222'},
});

export default App;
