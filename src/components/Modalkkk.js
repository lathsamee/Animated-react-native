import React from 'react';
import {View, StyleSheet, Image, Modal, Text} from 'react-native';

export default function Modals() {
  return (
    <View style={styles.container}>
      <Modal>
        <View>
          <Text>Hii Modal</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
