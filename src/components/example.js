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
    this.state = {
      dynamicIndex: 0,
      active: 0,
      scrollY: new Animated.Value(0),
    };
  }

  downButtonHandler = (num) => {
    this.setState({active: num});
    if (this.arr.length >= this.state.dynamicIndex) {
      // To Scroll to the index 5 element
      this.scrollview_ref.scrollTo({
        x: 0,
        y: this.arr[num],
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
          horizontal={true}
          style={{
            flexDirection: 'row',
            backgroundColor: '#1e73be',
            padding: 5,
          }}>
          {this.items.map((value, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.5}
              onPress={() => this.downButtonHandler(i)}
              style={
                this.state.active == i
                  ? {padding: 15, backgroundColor: 'blue'}
                  : {padding: 15, backgroundColor: '#f4801e'}
              }>
              <Text style={{color: '#fff'}}>{value}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          ref={(ref) => {
            this.scrollview_ref = ref;
          }}
          onScroll={({nativeEvent}) => {
            // console.log('Event', nativeEvent.contentOffset.y);
            let grandY = nativeEvent.contentOffset.y;
            let grandYInt = parseInt(grandY);
            let arrayInt = this.arr.map((data) => parseInt(data));
            let hhh = arrayInt.findIndex((data) => data === grandYInt);
            if (hhh !== -1) {
              this.setState({active: hhh});
            }
          }}>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array
            //item is the single item of the array
            <View
              key={key}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
                // console.log('height:', layout.height);
                // console.log('width:', layout.width);
                // console.log('x:', layout.x);
                // console.log('y:', layout.y);
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
