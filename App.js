import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, useEffect, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
//import { NativeAppEventEmitter, navigator } from 'react-native';
import Botao from './componentes/Cartas';
import TelaPrincipal from './componentes/TelaIs';

//este sistema foi feita com base em um jogo de carata e uma tabela
//grid do proprio tutorial do react ^-^
function precionado() {
}

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <Botao/>
          <TelaPrincipal/>
            {
                
            }
   </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});
