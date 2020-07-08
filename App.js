import React from 'react';
import {View} from 'react-native';
import ScrollY from './src/components/scrollY';
import Header from './src/components/scrollHeader';
import HeaderY from './src/components/scrollYHeader';
import HeaderTabs from './src/components/UberEats';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderTabs />
    </View>
  );
};
export default App;
