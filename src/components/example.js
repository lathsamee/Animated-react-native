/*Example to Scroll to a specific position in scrollview*/
import React, {Component} from 'react';
//import react in our project
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Button,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {Theme} from '../utils';
//import all the components we needed
export default class App extends Component {
  _isMounted = false;
  headerImage = require('../image/feature_graphic.png');

  constructor() {
    super();
    //Array of Item to add in Scrollview
    this.items = [
      {
        title: 'rice',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'fish',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'mobile',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'game',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'movie',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'computer',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'bags',
        content: [
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'soup',
        content: [
          {
            pd_name: 'soup rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 40000,
          },
          {
            pd_name: 'soup chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'Tom yum',
        content: [
          {
            pd_name: 'soup rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 40000,
          },
          {
            pd_name: 'soup chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
      {
        title: 'pok pok',
        content: [
          {
            pd_name: 'soup rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 40000,
          },
          {
            pd_name: 'soup chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'chicken rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
        ],
      },
    ];

    //Blank array to store the location of each item
    this.arr = [];
    this.arrayX = [];
    this.activeIndex = 0;

    this.state = {
      dynamicY: 0,
      active: 0,
      tabNumber: 0,
      buttonClick: false,
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  downButtonHandler(num) {
    this.scrollview_ref.getNode().scrollTo({
      x: 0,
      y: this.arr[num],
      animated: true,
    });
    this.scrollview_X_ref.scrollTo({
      x: this.arrayX[num],
      y: 0,
      animated: true,
    });
    this.activeIndex = num;
    this._isMounted &&
      this.setState({active: num}, () =>
        setTimeout(() => {
          this.setState({buttonClick: false});
        }, 100),
      );
  }

  opacity = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
  };
  backgrounded = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['rgba(255,255,255,0.0)', '#2fd1c9'],
      extrapolate: 'clamp',
    });
  };
  opacityTitle = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 50, 150, 200, 300],
      outputRange: [0, 0.1, 0.5, 50, 140],
      extrapolate: 'clamp',
    });
  };
  opacityInfo = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
  };
  topInfo = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [Theme.relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
      extrapolate: 'clamp',
    });
  };
  topScrollView = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [Theme.relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };
  grandYInfo = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    });
  };
  grandXInfo = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 160],
      outputRange: [0, 140],
      extrapolate: 'clamp',
    });
  };

  handleScroll = (event) => {
    // console.log(
    //   '%c event:',
    //   'color: green; font-size: 13px',
    //   event.nativeEvent.contentOffset.y,
    // );
    let grandY = event.nativeEvent.contentOffset.y;
    let grandYInt = parseInt(grandY);
    let arrayInt = this.arr.map((data) => parseInt(data));
    let number = arrayInt.findIndex((data) => data >= grandYInt);

    if (this.state.buttonClick === false) {
      if (grandYInt !== 0) {
        console.log(
          '%c grand Y Int:',
          'color: green; font-size: 13px',
          grandYInt !== 0,
        );
        if (this.activeIndex !== number - 1) {
          console.log(
            '%c this.activeIndex !== number - 1:',
            'color: green; font-size: 13px',
            this.activeIndex !== number - 1,
          );
          if (number - 1 !== -1) {
            console.log(
              '%c number - 1 !== -1:',
              'color: green; font-size: 13px',
              number - 1 !== -1,
            );
            console.log('%c redred:', 'color: green; font-size: 13px');
            this.activeIndex = number - 1;
            this._isMounted &&
              this.setState({
                active: this.activeIndex,
              });
            this.scrollview_X_ref.scrollTo({
              x: this.arrayX[this.activeIndex],
              y: 0,
              animated: true,
            });
          }
        }
      } else {
        console.log('%c greenreddn:', 'color: green; font-size: 13px');
        this.activeIndex = number;
        this._isMounted && this.setState({active: this.activeIndex});
        this.scrollview_X_ref.scrollTo({
          x: this.arrayX[this.activeIndex],
          y: 0,
          animated: true,
        });
      }
    }
  };

  render() {
    // console.log(
    //   'See it',
    //   this.state.buttonClick,
    //   this.activeIndex,
    //   this.state.active,
    //   Theme.APPBAR_HEIGHT,
    // );
    const opacityImage = this.opacity();
    const backgroundTitle = this.backgrounded();
    const opacityTitle = this.opacityTitle();
    const opacityInfo = this.opacityInfo();
    const topInfo = this.topInfo();
    const grandYInfo = this.grandYInfo();
    const grandXInfo = this.grandXInfo();
    const topScrollView = this.topScrollView();
    const HEADER_IMAGE_HEIGHT = Theme.relativeHeight(30); //232px

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            height: HEADER_IMAGE_HEIGHT,
            width: '100%',
            top: 0,
            alignSelf: 'center',
            position: 'absolute',
            opacity: opacityImage,
          }}
          source={this.headerImage}
        />

        <Animated.View
          style={{
            height: Theme.APPBAR_HEIGHT,
            backgroundColor: backgroundTitle,
            width: '100%',
            alignItem: 'center',
            justifyContent: 'center',
            zIndex: 200,
            elevation: 200,
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1000,
              elevation: 1000,
              width: Theme.relativeWidth(9),
              height: Theme.relativeWidth(9),
              justifyContent: 'center',
              alignItems: 'center',
              left: Theme.relativeWidth(2),
              backgroundColor: '#2fd1c9',
              paddingHorizontal: 7,
              borderRadius: Theme.APPBAR_HEIGHT,
            }}
            onPress={() => alert('Ohhh')}>
            <FontAwesome5 name={'angle-left'} brand size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1000,
              elevation: 1000,
              width: Theme.relativeWidth(9),
              height: Theme.relativeWidth(9),
              justifyContent: 'center',
              alignItems: 'center',
              right: Theme.relativeWidth(2),
              backgroundColor: 'white',
              padding: 5,
              borderRadius: Theme.APPBAR_HEIGHT,
            }}
            onPress={() => alert('Ohhh')}>
            <FontAwesome5
              name={'calendar-plus'}
              brand
              size={18}
              color="orange"
            />
          </TouchableOpacity>
          <Animated.Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              opacity: opacityTitle,
              fontSize: Theme.fontLarge,
            }}>
            Ka Kar
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            opacity: opacityInfo,
            top: topInfo,
            zIndex: 100,
            borderRadius: (Theme.APPBAR_HEIGHT - 20) / 2,
            height: Theme.relativeHeight(17),
            width: Theme.relativeWidth(93),
            backgroundColor: 'white',
            alignSelf: 'center',
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            transform: [{translateY: grandYInfo}],
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Animated.Text
              style={{
                transform: [{translateX: grandXInfo}],
                // fontSize: Theme.fontLarge,
              }}>
              Ka Kar
            </Animated.Text>
            <Text>100+</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>ເຂົ້າປຽກ, ຕຳປູ, ຕຳປາ</Text>
            <Text>20-25min</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FontAwesome5 name={'facebook'} />
            <Text>Promotion</Text>
          </View>
        </Animated.View>

        <Animated.ScrollView
          // nestedScrollEnabled={true}
          // overScrollMode={'never'}
          stickyHeaderIndices={[0]}
          ref={(ref) => {
            this.scrollview_ref = ref;
          }}
          style={{zIndex: 1000, elevation: 1000}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {
              useNativeDriver: false,
              listener: (event) => {
                this.handleScroll(event);
              },
            },
          )}>
          <ScrollView
            ref={(ref) => {
              this.scrollview_X_ref = ref;
            }}
            nestedScrollEnabled={true}
            horizontal={true}
            style={{
              flexDirection: 'row',
              top: 250,
            }}>
            <Text>Category</Text>
            {this.items.map(({title}, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  activeOpacity={0.5}
                  onPress={() => {
                    if ((this.activeIndex === i) !== true) {
                      this._isMounted && this.setState({buttonClick: true});
                      this.downButtonHandler(i);
                    }
                  }}
                  onLayout={(event) => {
                    const layout = event.nativeEvent.layout.x;
                    this.arrayX[i] = layout;
                  }}
                  style={
                    this.state.active === i
                      ? {
                          padding: 15,
                          backgroundColor: 'blue',
                        }
                      : {
                          padding: 15,
                          backgroundColor: '#f4801e',
                        }
                  }>
                  <Text style={{color: '#fff'}}>{title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {this.items.map(({title, content}, key) => (
            <View
              key={key}
              style={{top: 220}}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
              }}>
              <Text style={styles.text}>
                {key}. {title}
              </Text>
              <View style={styles.separator} />
              <View>
                {content.map(({pd_name, pd_price, pd_detail}, i) => {
                  return (
                    <View key={i} style={{padding: 10}}>
                      <Text>{pd_name}</Text>
                      <Text>{pd_price}</Text>
                      <Text>{pd_detail}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },

  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});
