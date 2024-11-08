import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Ajuda</Text>
      <Text>FAQ: Como faço para realizar uma compra?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
