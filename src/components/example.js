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
      dynamicIndex: 0,
      active: 0,
    };
  }

  downButtonHandler = (num) => {
    this.setState({active: num});
    console.log('%c num:', 'color: green; font-size: 13px', num);
    if (this.arr.length >= this.state.dynamicIndex) {
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
    } else {
      alert('Out of Max Index');
    }
  };

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
                onPress={() => this.downButtonHandler(i)}
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
            // console.log('Event', nativeEvent.)contentOffset;

            let grandY = nativeEvent.contentOffset.y;
            let grandYInt = parseInt(grandY);
            let arrayInt = this.arr.map((data) => parseInt(data));

            let number = arrayInt.findIndex((data) => data >= grandYInt);
            console.log(
              '%c grandYInt:',
              'color: green; font-size: 13px',
              grandYInt,
            );
            // this.activeIndex =
            //   this.activeIndex !== number ? number : this.activeIndex;

            if (grandYInt >= 0) {
              if (this.activeIndex !== number - 1) {
                this.activeIndex = number - 1;
                this.setState({active: number - 1});
                // this.downButtonHandler(number - 1);
                console.log(
                  '%c this.activeIndex:',
                  'color: green; font-size: 13px',
                  this.activeIndex,
                );
              } else if (number - 1 <= 0) {
                this.activeIndex = 0;
                this.setState({active: 0});
                console.log(
                  '%c this.activeIndex:',
                  'color: red; font-size: 13px',
                  this.activeIndex,
                );
              }
            } else {
              this.activeIndex = 0;
            }

            // let numberOfCat = arrayInt.findIndex((data) => data === grandYInt);

            // if (numberOfCat !== -1) {
            //   this.setState({active: numberOfCat});
            //   this.downButtonHandler(numberOfCat);
            // }
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
