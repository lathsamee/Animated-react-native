import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

const UberEats = (props) => {
  useEffect(() => {}, []);
  const [tabs, setTabs] = useState('defaultTabs');

  return (
    <View style={styles.container}>
      {/* <HeaderImage /> */}
      <ScrollView>
        {/* <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs(...{tabs});
          }}
        /> */}
        <View>
          <Text>lsjdf;alsdjlkfjskdfjal;</Text>
        </View>
      </ScrollView>
      {/* <Header {...{tabs}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UberEats;
