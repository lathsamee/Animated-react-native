/*Example to Scroll to a specific position in scrollview*/
import React, {Component} from 'react';
//import react in our project

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
  constructor() {
    super();
    //Array of Item to add in Scrollview
    this.items = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten ',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty ',
      'twenty-one',
      'twenty-two',
      'twenty-three',
      'twenty-four',
      'twenty-five',
      'twenty-six',
      'twenty-seven',
      'twenty-eight',
      'twenty-nine',
      'thirty',
      'thirty-one',
      'thirty-two',
      'thirty-three',
      'thirty-four',
      'thirty-five',
      'thirty-six',
      'thirty-seven',
      'thirty-eight',
      'thirty-nine',
      'forty',
    ];

    //Blank array to store the location of each item
    this.arr = [];
    this.arrayX = [];
    this.activeIndex = 0;

    this.state = {
      dynamicY: 0,
      active: 0,
      tabNumber: 0,
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  downButtonHandler(num) {
    this._isMounted && this.setState({active: num});
    this.activeIndex = num;
    console.log('%c num:', 'color: green; font-size: 13px', num);
    console.log(
      '%c active:',
      'color: green; font-size: 13px',
      this.activeIndex,
    );
    // if (this.activeIndex >= this.state.dynamicY) {

    this.scrollview_ref.scrollTo({
      x: 0,
      y: this.arr[num],
      animated: true,
    });
    this.scrollview_X_ref.scrollTo({
      x: this.arrayX[num],
      y: 0,
      animated: true,
    });
    // }
  }

  render() {
    return (
      <View style={styles.container}>
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
          {this.items.map((value, i) => {
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.5}
                onPress={async () => await this.downButtonHandler(i)}
                onLayout={(event) => {
                  const layout = event.nativeEvent.layout.x;
                  this.arrayX[i] = layout;
                }}
                style={
                  this.state.active === i
                    ? {padding: 15, backgroundColor: 'blue'}
                    : {padding: 15, backgroundColor: '#f4801e'}
                }>
                <Text style={{color: '#fff'}}>{value}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView
          ref={(ref) => {
            this.scrollview_ref = ref;
          }}
          onScroll={({nativeEvent}) => {
            let grandY = nativeEvent.contentOffset.y;
            let grandYInt = parseInt(grandY);
            let arrayInt = this.arr.map((data) => parseInt(data));

            let number = arrayInt.findIndex((data) => data >= grandYInt);
            if (grandYInt !== 0) {
              if (this.activeIndex !== number - 1) {
                if (number - 1 !== -1) {
                  this.activeIndex = number - 1;
                  this._isMounted && this.setState({active: this.activeIndex});
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
          }}>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            <View
              key={key}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
              }}>
              <Text style={styles.text}>
                {key}. {item}
              </Text>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
