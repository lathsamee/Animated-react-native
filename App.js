import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollY from './src/components/scrollY';
import Header from './src/components/scrollHeader';
import HeaderY from './src/components/scrollYHeader';
import HeaderTabs from './src/components/tabs/UberEats';
import Exam from './src/components/example';
import Type from './src/components/typeScript/UberEats';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
        <Exam />
      </SafeAreaProvider>
    </View>
  );
};
export default App;
