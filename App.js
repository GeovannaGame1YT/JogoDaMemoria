import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './Conponesntes/Inicio';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#2c3e50", "#3498db"]}
      style={{
        flex: 1,
      }}
    >
      {children}
    </LinearGradient>
  );
};

const screenStates = {
  Inicio: "Inicio",
  Jogo: "Jogo",
  GameOver: "GameOver",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio/>
      <h1>Jogo Da Memoria</h1>
      <view></view>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
