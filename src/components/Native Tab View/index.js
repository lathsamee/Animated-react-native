//  Created by Artem Bogoslavskiy on 7/5/18.

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  View,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import {Container, Header, Content} from 'native-base';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {SearchBarProvider} from './searchBarAnimation';

import SearchBar from './components/SearchBar';
import Tab from './tabs/Tab';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default class SeachScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentTab: 'tab1',
      routes: [
        {key: 'tab1', title: 'Tab 1'},
        {key: 'tab2', title: 'Tab 2'},
      ],
    };
  }

  _handleIndexChange = (index) => {
    this.setState({
      currentTab: this.state.routes[index].key,
      index,
    });
  };

  _getLabelText = ({route}) => route.title;
  _renderHeader = (animation, canJumpToTab) => (props) => {
    // console.log(animation);
    return (
      <SearchBar
        animation={animation}
        changeInputFocus={(suggestionFocus) => this.setState({suggestionFocus})}
        renderTabBar={() => (
          <TabBar
            onTabPress={({route}) => {
              if (route.key != this.state.currentTab && canJumpToTab) {
                animation.onTabPress(route);
              }
            }}
            getLabelText={this._getLabelText}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            labelStyle={styles.label}
            {...props}
          />
        )}
      />
    );
  };

  _renderScene = SceneMap({
    tab1: Tab,
    tab2: Tab,
  });

  render() {
    return (
      <Container>
        <Header>
          <Text>Header</Text>
        </Header>
        <Content>
          <SearchBarProvider currentTab={this.state.currentTab}>
            {(animation, {canJumpToTab}) => (
              <View style={initialLayout}>
                {Platform.OS === 'android' && (
                  <StatusBar translucent={true} backgroundColor="transparent" />
                )}
                <TabView
                  style={styles.container}
                  navigationState={this.state}
                  renderScene={this._renderScene}
                  renderTabBar={this._renderHeader(animation, canJumpToTab)}
                  onIndexChange={this._handleIndexChange}
                  initialLayout={initialLayout}
                  swipeEnabled={false} // TODO ...
                  canJumpToTab={() => canJumpToTab}
                  useNativeDriver
                />
              </View>
            )}
          </SearchBarProvider>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeef0',
  },
  tabbar: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  indicator: {
    backgroundColor: '#45688e',
  },
  label: {
    color: '#45688e',
    margin: 0,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: '400',
  },
  suggestionWrap: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 3,
  },
});
