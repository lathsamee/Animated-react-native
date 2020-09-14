//  Created by Artem Bogoslavskiy on 7/5/18.

import React, {Component} from 'react';

import {ifIphoneX, ifAndroid} from '../utils';
import {View, StyleSheet, Animated, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SearchBar extends Component {
  render() {
    const {animation, changeInputFocus, renderTabBar} = this.props;

    const transformWrapper = animation.getTransformWrapper();
    const transformSearchBar = animation.getTransformSearchBar();
    const opacitySearchBar = animation.getOpacitySearchBar();

    return (
      <Animated.View style={[styles.wrapper, transformWrapper]}>
        <Animated.View style={opacitySearchBar}>
          <View style={styles.searchContainer}>
            <Animated.View style={[transformSearchBar]}>
              <TouchableOpacity
                onPress={() => alert('Hey Hey')}
                style={styles.searchInput}>
                <Text style={{textAlign: 'center'}}>Rank Club</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>
        {renderTabBar()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    zIndex: 99,
    backgroundColor: '#597fab',
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 10,
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 28,
      },
    ),
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 120,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
