import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, useEffect, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { NativeAppEventEmitter, navigator } from 'react-native';
import TelaReturn from './componentes/TelaReturn';
import Cores from './componentes/Tetste';
import TelaPrincipal from './componentes/TelaIs';
import { render } from 'react-dom';

function onPress() {
  NativeAppEventEmitter.TelaPrincipal;
}
export default function App() {
  render()
  return (
    <>
    <View style={styles.container}>
      <Text>Jogo Da Memoria</Text>
      <StatusBar style="auto" />
      <View style={styles.main}>
                <Button titulo="Play Game" precionado={onPress}/>
            </View>
    </View>
    <TelaReturn/> //não esta mais vindo esta tela
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
  }
});
