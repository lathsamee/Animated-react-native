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
} from 'react-native';
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
    this._isMounted &&
      this.setState({active: num}, () =>
        setTimeout(() => {
          this.setState({buttonClick: false});
          this.activeIndex = num;
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

  handleScroll = (event) => {
    //custom actions
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
        if (this.activeIndex !== number - 1) {
          if (number - 1 !== -1) {
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
    // this.state.buttonClick,
    // this.activeIndex,
    // this.state.active,
    // );
    const opacityImage = this.opacity();
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            height: 200,
            width: '100%',
            top: 0,
            alignSelf: 'center',
            position: 'absolute',
            opacity: opacityImage,
          }}
          source={this.headerImage}
        />

        <Animated.ScrollView
          stickyHeaderIndices={[0]}
          ref={(ref) => {
            this.scrollview_ref = ref;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {
              useNativeDriver: true,
              listener: (event) => {
                this.handleScroll(event);
                // const offsetY = event.nativeEvent.contentOffset.y;
                // console.log(
                //   '%c offsetY:',
                //   'color: green; font-size: 13px',
                //   offsetY,
                // );
                // do something special
              },
            },
          )}
          // onScroll={({nativeEvent}) => {
          //   this.setState({scrollY: nativeEvent.contentOffset.y});
          //   let grandY = nativeEvent.contentOffset.y;
          //   let grandYInt = parseInt(grandY);
          //   let arrayInt = this.arr.map((data) => parseInt(data));
          //   let number = arrayInt.findIndex((data) => data >= grandYInt);

          //   if (this.state.buttonClick === false) {
          //     if (grandYInt !== 0) {
          //       if (this.activeIndex !== number - 1) {
          //         if (number - 1 !== -1) {
          //           this.activeIndex = number - 1;
          //           this._isMounted &&
          //             this.setState({
          //               active: this.activeIndex,
          //             });
          //           this.scrollview_X_ref.scrollTo({
          //             x: this.arrayX[this.activeIndex],
          //             y: 0,
          //             animated: true,
          //           });
          //         }
          //       }
          //     } else {
          //       this.activeIndex = number;
          //       this._isMounted && this.setState({active: this.activeIndex});
          //       this.scrollview_X_ref.scrollTo({
          //         x: this.arrayX[this.activeIndex],
          //         y: 0,
          //         animated: true,
          //       });
          //     }
          //   }
          // }}
        >
          <ScrollView
            ref={(ref) => {
              this.scrollview_X_ref = ref;
            }}
            horizontal={true}
            style={{
              flexDirection: 'row',
              backgroundColor: '#1e73be',
              padding: 5,
            }}>
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
                      ? {padding: 15, backgroundColor: 'blue'}
                      : {padding: 15, backgroundColor: '#f4801e'}
                  }>
                  <Text style={{color: '#fff'}}>{title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {this.items.map(({title, content}, key) => (
            <View
              key={key}
              style={styles.item}
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
