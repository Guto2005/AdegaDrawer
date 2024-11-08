import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Importação do ícone

// Importando as telas
import PerfilScreen from './screens/PerfilScreen';
import ProdutosScreen from './screens/ProdutosScreen';
import ContatosScreen from './screens/ContatosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import AjudaScreen from './screens/AjudaScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Perfil">
        <Drawer.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            drawerIcon: () => <Icon name="person" size={24} color="black" />, // Ícone para a tela de Perfil
          }}
        />
        <Drawer.Screen
          name="Produtos"
          component={ProdutosScreen}
          options={{
            drawerIcon: () => <Icon name="cart" size={24} color="black" />, // Ícone para a tela de Produtos
          }}
        />
        <Drawer.Screen
          name="Contatos"
          component={ContatosScreen}
          options={{
            drawerIcon: () => <Icon name="mail" size={24} color="black" />, // Ícone para a tela de Contatos
          }}
        />
        <Drawer.Screen
          name="Carrinho"
          component={CarrinhoScreen}
          options={{
            drawerIcon: () => <Icon name="basket" size={24} color="black" />, // Ícone para a tela de Carrinho
          }}
        />
        <Drawer.Screen
          name="Ajuda"
          component={AjudaScreen}
          options={{
            drawerIcon: () => <Icon name="help-circle" size={24} color="black" />, // Ícone para a tela de Ajuda
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
