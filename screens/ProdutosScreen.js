import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProdutosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Produtos</Text>
      <Text>Produto 1: Camiseta</Text>
      <Text>Produto 2: Calça Jeans</Text>
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
