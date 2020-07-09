import React from 'react';
import {View} from 'react-native';
import ScrollY from './src/components/scrollY';
import Header from './src/components/scrollHeader';
import HeaderY from './src/components/scrollYHeader';
import HeaderTabs from './src/components/tabs/UberEats';
import Exam from './src/components/example';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <Exam />
    </View>
  );
};
export default App;
