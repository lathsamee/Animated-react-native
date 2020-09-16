import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, Animated, FlatList, View} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FlatListHelper = (props) => {
  const windowHeight = Dimensions.get('window').height;
  const {
    data,
    renderItem,
    onGetRef,
    scrollY,
    // onScrollEndDrag,
    // onMomentumScrollEnd,
    // onMomentumScrollBegin,
    isListGliding,
    TabBarHeight,
    HeaderHeight,
    syncScrollOffset,
  } = props;

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;
    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  return (
    <AnimatedFlatList
      scrollToOverflowEnabled={true}
      numColumns={1}
      ref={onGetRef}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListHeaderComponent={() => <View style={{height: 10}} />}
      contentContainerStyle={{
        paddingTop: HeaderHeight + TabBarHeight,
        paddingHorizontal: 10,
        minHeight: windowHeight - TabBarHeight,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default React.memo(FlatListHelper);
