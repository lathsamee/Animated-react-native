import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollY from './src/components/scrollY';
import Header from './src/components/scrollHeader';
import HeaderY from './src/components/scrollYHeader';
import HeaderTabs from './src/components/tabs/UberEats';
import Exam from './src/components/example';
import Type from './src/components/typeScript/UberEats';
import Modals from './src/components/Modalkkk';
import FList from './src/components/Flatlist';
import AnimateFlats from './src/components/Flatlist/animated';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
        <AnimateFlats />
      </SafeAreaProvider>
    </View>
  );
};
export default App;
