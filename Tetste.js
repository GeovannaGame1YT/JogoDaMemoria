import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, style, TouchableOpacity } from "react-native";

function OriBotoes() {
  
}
//Tristeza parou de pegar os outro botoes ;-;
export default class Cores extends React.Component{
  render() {
      return (
          <View style={styles.container}>
              <Button  title="PLAY GAME" 
              onPress={() =>Alert.alert("Você esta prestes a jogar")} />
            <Button title='   '
                onPress={() => Alert.alert("Cor","Azul")}
                color='#0693E3'></Button>
            <Button title='   ' 
              onPress={() =>Alert.alert("Cor","Vermelho")}
              color='red'></Button>
            <Button title='   '
              onPress={() => Alert.alert("Cor","Amarelo")}
              color='#FCB900'></Button>
            <Button title='   '
              onPress={() => Alert.alert("Cor", "Verde")}
              color='#008b02'></Button>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
