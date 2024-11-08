import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CarrinhoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Carrinho</Text>
      <Text>Produto: Camiseta - Quantidade: 2</Text>
      <Text>Total: R$ 100,00</Text>
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
