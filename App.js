import React from 'react';
import {View} from 'react-native';
import ScrollY from './src/components/scrollY';
import Header from './src/components/scrollHeader';
import HeaderY from './src/components/scrollYHeader';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderY />
    </View>
  );
};
export default App;
