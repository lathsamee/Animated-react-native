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
  Animated,
  Platform,
} from 'react-native';
import {Theme} from '../utils';
export default class App extends Component {
  _isMounted = false;
  headerImage = require('../image/feature_graphic.png');
  productImage = require('../image/feature_graphic.png');

  constructor() {
    super();
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
            pd_name: 'Fish',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'Fish',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'Fish rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'Fish rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'Fish rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'Fish rice',
            pd_detail:
              'Hainanese chicken rice is a dish of poached chicken and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'Fish rice',
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
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'mobile',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 20000,
          },
          {
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
            pd_price: 10000,
          },
          {
            pd_name: 'mobile rice',
            pd_detail:
              'Hainanese mobile rice is a dish of poached mobile and seasoned rice',
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

    this.arr = [];
    this.arrayX = [];
    this.activeIndex = 0;

    this.state = {
      dynamicY: 0,
      active: 0,
      tabNumber: 0,
      buttonClick: false,
      isScroll: false,
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
    this._isMounted && this.setState({active: num, isScroll: false});
    // , () =>
    //   setTimeout(() => {
    //     this._isMounted && this.setState({buttonClick: false});
    //   }, 1000),
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
      outputRange: ['rgba(255,255,255,0)', 'rgba(47, 209, 201, 1.0)'],
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
  topSpacialBar = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [1, 250],
      outputRange: [Theme.relativeHeight(33), Platform.OS === 'ios' ? 8 : 1],
      extrapolate: 'clamp',
      // useNativeDriver: true,
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
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
  };
  zIndexHeader = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    });
  };
  widthInfo = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140, 180],
      outputRange: [
        Theme.relativeWidth(93),
        Theme.relativeWidth(73),
        Theme.relativeWidth(53),
      ],
      extrapolate: 'clamp',
    });
  };
  marginTopAni = () => {
    const {scrollY} = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140, 180],
      outputRange: [4, 8, 10],
      extrapolate: 'clamp',
    });
  };

  handleScroll = (event) => {
    let grandY = event.nativeEvent.contentOffset.y;
    let grandYInt = parseInt(grandY);
    let arrayInt = this.arr.map((data) => parseInt(data));
    let number = arrayInt.findIndex((data) => data >= grandYInt);
    let numberMinusOne = number - 1;

    if (this.state.isScroll) {
      if (this.activeIndex !== numberMinusOne) {
        if (numberMinusOne === -1) {
          this.activeIndex = 0;
          this._isMounted && this.setState({active: 0});
          this.scrollview_X_ref.scrollTo({
            x: this.arrayX[this.activeIndex],
            y: 0,
            animated: true,
          });
        } else if (numberMinusOne === 0) {
          this.activeIndex = 0;
          this._isMounted && this.setState({active: 0});
          this.scrollview_X_ref.scrollTo({
            x: this.arrayX[this.activeIndex],
            y: 0,
            animated: true,
          });
        } else if (numberMinusOne >= 1) {
          this.activeIndex = numberMinusOne;
          this._isMounted && this.setState({active: numberMinusOne});
          this.scrollview_X_ref.scrollTo({
            x: this.arrayX[this.activeIndex],
            y: 0,
            animated: true,
          });
        } else if (numberMinusOne !== -2) {
          this.activeIndex = numberMinusOne;
          this._isMounted && this.setState({active: numberMinusOne});
          this.scrollview_X_ref.scrollTo({
            x: this.arrayX[this.activeIndex],
            y: 0,
            animated: true,
          });
        }
      }
    }
  };

  render() {
    console.log(
      'See it',
      this.state.isScroll,
      this.activeIndex,
      this.state.active,
    );
    const HEADER_IMAGE_HEIGHT = Theme.relativeHeight(30);
    const opacityImage = this.opacity();
    const backgroundTitle = this.backgrounded();
    const opacityTitle = this.opacityTitle();
    const opacityInfo = this.opacityInfo();
    const topInfo = this.topInfo();
    const grandYInfo = this.grandYInfo();
    const grandXInfo = this.grandXInfo();
    const topSpacialBar = this.topSpacialBar(); //232px
    const marginTopAni = this.marginTopAni();
    const widthInfo = this.widthInfo();
    const {scrollY} = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[
            styles.imageAni,
            {
              height: HEADER_IMAGE_HEIGHT,
              opacity: opacityImage,
            },
          ]}
          source={this.headerImage}
        />

        <Animated.View
          style={[
            styles.viewHeaderAni,
            {
              backgroundColor: backgroundTitle,
            },
          ]}>
          <TouchableOpacity
            style={[
              styles.buttonHeaderAni,
              {
                left: Theme.relativeWidth(2),
                backgroundColor: 'rgba(47, 209, 201, 1.0)',
                paddingHorizontal: 7,
              },
            ]}
            onPress={() => alert('Ohhh')}>
            <FontAwesome5 name={'angle-left'} brand size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonHeaderAni,
              {
                right: Theme.relativeWidth(2),
                backgroundColor: 'white',
                padding: 5,
              },
            ]}
            onPress={() => alert('Ohhh')}>
            <FontAwesome5
              name={'calendar-plus'}
              brand
              size={18}
              color="orange"
            />
          </TouchableOpacity>
          <Animated.Text
            style={[
              styles.textAni,
              {
                opacity: opacityTitle,
              },
            ]}>
            Ka Kar
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.viewInfoAni,
            {
              opacity: opacityInfo,
              top: topInfo,
              width: widthInfo,
              transform: [{translateY: grandYInfo}],
            },
          ]}>
          <View style={styles.viewInfoTextFr}>
            <Animated.Text
              style={{
                transform: [{translateX: grandXInfo}],
                fontSize: Theme.fontLarge,
                fontWeight: 'bold',
              }}>
              Ka Kar
            </Animated.Text>
            <Text>
              100+ <FontAwesome5 name={'heart'} color="#F1902F" />
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>ເຂົ້າປຽກ, ຕຳປູ, ຕຳປາ</Text>
            <Text>
              <FontAwesome5 name={'clock'} /> 20-25min
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.viewInfoTextSe}>
              <TouchableOpacity onPress={() => alert('Facebook')}>
                <FontAwesome5
                  name={'facebook-f'}
                  color="blue"
                  size={18}
                  style={{
                    marginLeft: 0,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <FontAwesome5
                name={'instagram'}
                color="gold"
                size={18}
                style={{
                  marginLeft: 0,
                  marginRight: 10,
                }}
              />
              <FontAwesome5 name={'twitter'} color="#00acee" size={18} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  padding: 3,
                  borderRadius: 3,
                  marginLeft: 0,
                  marginRight: 10,
                }}>
                <Text>New</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'red',
                  padding: 3,
                  borderRadius: 3,
                  marginLeft: 0,
                  marginRight: 10,
                }}>
                <Text>Promotion</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'blue',
                  padding: 3,
                  borderRadius: 3,
                }}>
                <Text>Popular</Text>
              </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.viewIntroAni,
            {
              top: topSpacialBar,
              marginTop: marginTopAni,
            },
          ]}>
          <Text style={{color: '#ffffff'}}>
            ເຂົ້າຈີ່ທີ່ມີຫຼາຍກວ່າເຂົ້າຈີ່ຫຼາກຫາຍລົດຊາດ ພ້ອມຊຸບອຸ່ນໆ
            ບໍ່ວາຈະເປັນຊຸບ ໝາກອຶ ຊຸບຄຣີມສາລີ ຊຸບຜັກໂຫມ ທີ່ເປັນໄດ້ທັງອາຫານເຊົ້າ
            ຫຼື ອາຫານວ່າງພ້ອມ ເຄື່ອງດື່ມ ກາເຟ ແລະ ເຂົ້າໜົມ.
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.viewProAni,
            {
              top: topSpacialBar,
            },
          ]}>
          <Text style={styles.proText}>Promotion</Text>

          <ScrollView
            horizontal={true}
            style={{
              zIndex: 10,
              elevation: 10,
            }}>
            <View style={styles.viewPromo}>
              <View style={styles.viewCropPro}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Ice Capucinos
                </Text>
              </View>
            </View>
          </ScrollView>
        </Animated.View>

        <Animated.View
          style={[
            styles.viewCatAni,
            {
              top: topSpacialBar,
              marginTop: scrollY.interpolate({
                inputRange: [0, 140],
                outputRange: [0, 5],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Text style={styles.textCat}>Category</Text>
        </Animated.View>

        <Animated.ScrollView
          persistentScrollbar={true}
          scrollEventThrottle={16}
          overScrollMode={'never'}
          removeClippedSubviews={false}
          stickyHeaderIndices={[0]}
          ref={(ref) => {
            this.scrollview_ref = ref;
          }}
          style={{
            zIndex: 150,
            elevation: 150,
          }}
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
              top: 260,
              padding: 10,
              backgroundColor: '#fffffa',
            }}>
            {this.items.map(({title}, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  activeOpacity={1}
                  // onPress={async () => {
                  //   if ((this.activeIndex === i) !== true) {
                  //     this._isMounted &&
                  //       (await this.setState({buttonClick: true}));
                  //     await this.downButtonHandler(i);
                  //   }
                  // }}
                  onPress={() => this.downButtonHandler(i)}
                  onLayout={(event) => {
                    const layout = event.nativeEvent.layout.x;
                    this.arrayX[i] = layout;
                  }}
                  style={[
                    styles.buttonCat,
                    this.state.active === i
                      ? {
                          borderColor: '#F4801E',
                          borderWidth: 2,
                          backgroundColor: 'rgba(244,128,30,0.1)',
                        }
                      : {
                          borderColor: '#E9E9E9',
                          borderWidth: 2,
                          backgroundColor: '#ffffff',
                        },
                  ]}>
                  <Text
                    style={[
                      styles.textButtonCat,
                      this.state.active === i
                        ? {color: '#F4801E'}
                        : {color: '#C4CCCE'},
                    ]}>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {this.items.map(({title, content}, key) => (
            <View
              key={key}
              style={{top: 260}}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
              }}>
              <View>
                {content.map(({pd_name, pd_price, pd_detail}, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        padding: 10,
                        flex: 1,
                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                        onPress={() => alert('modal add product')}>
                        <View>
                          <Image
                            source={this.productImage}
                            style={{width: 110, height: 110, borderRadius: 10}}
                          />
                        </View>
                        <View
                          style={{
                            marginLeft: 20,
                            marginTop: 5,
                            justifyContent: 'space-between',
                          }}>
                          <Text style={{fontSize: Theme.fontLarge}}>
                            {pd_name}
                          </Text>
                          <Text
                            style={{
                              fontSize: Theme.fontNormal,
                              color: '#2BD0C0',
                            }}>
                            {pd_price} kip
                          </Text>
                          <Text style={{fontSize: Theme.fontSmall}}>
                            {pd_detail}
                          </Text>
                        </View>
                      </TouchableOpacity>
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
  imageAni: {
    width: '100%',
    top: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  viewHeaderAni: {
    height: Theme.APPBAR_HEIGHT,
    width: '100%',
    justifyContent: 'center',
  },
  buttonHeaderAni: {
    position: 'absolute',
    zIndex: 90,
    elevation: 90,
    width: Theme.relativeWidth(9),
    height: Theme.relativeWidth(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Theme.APPBAR_HEIGHT,
  },
  textAni: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Theme.fontLarge,
  },
  viewInfoAni: {
    position: 'absolute',
    zIndex: 100,
    elevation: 100,
    borderColor: '#707070',
    borderRadius: (Theme.APPBAR_HEIGHT - 20) / 2,
    height: Theme.relativeHeight(17),
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    justifyContent: 'space-between',
  },
  viewInfoTextFr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewInfoTextSe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewIntroAni: {
    flexDirection: 'row',
    backgroundColor: '#2FD1C9',
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    alignSelf: 'center',
    width: Theme.relativeWidth(93),
    borderRadius: (Theme.APPBAR_HEIGHT - 35) / 2,
    borderColor: '#C2C2C2',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  viewProAni: {
    marginBottom: 8,
    marginTop: 10,
    left: Theme.relativeWidth(3),
  },
  proText: {
    marginTop: 10,
    marginBottom: 15,
    color: '#F1902F',
    fontWeight: 'bold',
    fontSize: Theme.fontLarge,
  },
  viewPromo: {
    width: 110,
    height: 108,
    backgroundColor: 'gray',
    borderRadius: (Theme.APPBAR_HEIGHT - 40) / 2,
    marginLeft: 0,
    marginRight: 20,
  },
  viewCropPro: {
    top: 80,
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: 28,
    borderBottomLeftRadius: (Theme.APPBAR_HEIGHT - 42) / 2,
    borderBottomRightRadius: (Theme.APPBAR_HEIGHT - 42) / 2,
  },
  viewCatAni: {
    flexDirection: 'row',
    marginBottom: 8,
    left: Theme.relativeWidth(3),
  },
  textCat: {
    marginTop: 10,
    color: '#2FD1C9',
    fontSize: Theme.fontLarge,
    fontWeight: 'bold',
  },
  buttonCat: {
    marginLeft: 0,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  textButtonCat: {fontSize: Theme.fontNormal, fontWeight: 'bold'},

  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '95%',
  },

  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});
