import React, {Component} from 'react';
/*Components*/
import {
  Animated,
  View,
  StatusBar,
  Text,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
/*utils*/
import styles from './style';
import {ThemeUtils, Color} from '../utils';
/*Data*/
import artistData from '../assets/data/SongData';
import coverImage from '../image/bob-marley-cover.jpg';
import profileImage from '../image/bob-marley-profile.jpg';

const BIN_MA_YET = 'Bin ma yet';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  image = [
    {id: 2, uri: require('../image/logo_shop.png')},
    {id: 3, uri: require('../image/noInternet.png')},
    {id: 4, uri: require('../image/shop.png')},
    {id: 5, uri: require('../image/shop-icon.png')},
    {id: 6, uri: require('../image/shop1.png')},
    {id: 1, uri: require('../image/goteddy-bg.png')},
  ];

  //For header background color from transparent to header color
  _getHeaderBackgroundColor = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: ['rgba(0,0,0,0.0)', Color.HEADER_COLOR],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //For header image opacity
  _getHeaderImageOpacity = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image position from left
  _getImageLeftPosition = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 80, 140],
      outputRange: [
        ThemeUtils.relativeWidth(30),
        ThemeUtils.relativeWidth(38),
        ThemeUtils.relativeWidth(10),
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image position from top
  _getImageTopPosition = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeHeight(20),
        Platform.OS === 'ios' ? 8 : 10,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image width
  _getImageWidth = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeWidth(40),
        ThemeUtils.APPBAR_HEIGHT - 20,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image height
  _getImageHeight = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeWidth(40),
        ThemeUtils.APPBAR_HEIGHT - 20,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image border width
  _getImageBorderWidth = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist profile image border color
  _getImageBorderColor = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [Color.CARD_BG_COLOR, 'rgba(0,0,0,0.0)'],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //Song list container position from top
  _getListViewTopPosition = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [
        ThemeUtils.relativeWidth(100) - ThemeUtils.APPBAR_HEIGHT - 10,
        0,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //header title opacity
  _getHeaderTitleOpacity = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 20, 50],
      outputRange: [0, 0.5, 1],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  //artist name opacity
  _getNormalTitleOpacity = () => {
    const {scrollY} = this.state;

    return scrollY.interpolate({
      inputRange: [0, 20, 50],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  render() {
    const headerBackgroundColor = this._getHeaderBackgroundColor();

    const headerImageOpacity = this._getHeaderImageOpacity();

    const profileImageLeft = this._getImageLeftPosition();

    const profileImageTop = this._getImageTopPosition();

    const profileImageWidth = this._getImageWidth();

    const profileImageHeight = this._getImageHeight();

    const profileImageBorderWidth = this._getImageBorderWidth();

    const profileImageBorderColor = this._getImageBorderColor();

    const listViewTop = this._getListViewTopPosition();

    const headerTitleOpacity = this._getHeaderTitleOpacity();

    const normalTitleOpacity = this._getNormalTitleOpacity();

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[
            styles.headerImageStyle,
            {
              opacity: headerImageOpacity,
            },
          ]}
          source={coverImage}
        />

        <Animated.View
          style={[
            styles.headerStyle,
            {
              backgroundColor: headerBackgroundColor,
            },
          ]}>
          <View style={styles.headerLeftIcon}>
            <Icons
              name={'arrow-left'}
              size={25}
              color={Color.HEADER_BACK_ICON_COLOR}
            />
          </View>

          <View style={styles.headerRightIcon}>
            <Icons
              name={'settings'}
              size={25}
              color={Color.HEADER_BACK_ICON_COLOR}
            />
          </View>

          <Animated.Text
            style={[
              styles.headerTitle,
              {
                opacity: headerTitleOpacity,
              },
            ]}>
            {BIN_MA_YET}
          </Animated.Text>
        </Animated.View>

        <Animated.Image
          style={[
            styles.profileImage,
            // {
            //   opacity: headerImageOpacity,
            // },
            {
              borderWidth: profileImageBorderWidth,
              borderColor: profileImageBorderColor,
              borderRadius: (ThemeUtils.APPBAR_HEIGHT - 20) / 2,
              height: profileImageHeight,
              width: profileImageWidth,
              transform: [
                {translateY: profileImageTop},
                {translateX: profileImageLeft},
              ],
              opacity: headerImageOpacity,
            },
          ]}
          source={profileImage}
        />

        <Animated.ScrollView
          overScrollMode={'never'}
          style={{zIndex: 10}}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {contentOffset: {y: this.state.scrollY}},
            },
          ])}>
          <Animated.Text
            style={[
              styles.profileTitle,
              {
                opacity: normalTitleOpacity,
              },
            ]}>
            {BIN_MA_YET}
          </Animated.Text>

          <Animated.Text
            style={[
              styles.songCountStyle,
              {
                opacity: normalTitleOpacity,
              },
            ]}>
            {`♬ ${artistData.length} songs`}
          </Animated.Text>

          <Animated.View
            style={{
              transform: [
                {
                  translateY: listViewTop,
                },
              ],
            }}>
            {this.image.map((value) => {
              return (
                <View key={value.id} style={{height: 400, margin: 10}}>
                  <Image
                    source={value.uri}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      borderRadius: 20,
                    }}
                  />
                </View>
              );
            })}
          </Animated.View>
        </Animated.ScrollView>
      </View>
    );
  }
}
