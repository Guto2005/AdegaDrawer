import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Contatos</Text>
      <Text>Entre em contato pelo e-mail: contato@exemplo.com</Text>
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
