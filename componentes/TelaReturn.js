import React from "react";
import { StyleSheet, SafeAreaView, NavigationContainer, Text } from 'react-native';

import TelaPrincipal from "./TelaIs";
import Botao from "./Cartas"

 const TelaReturn = () => {
    return (
        <NavigationContainer>
            <stack.Navigator
            screenOptions={{
                renderShown: false,
            }}>
                <stack.Screen name="TelaPrincipal" componente={TelaPrincipal}/>
                <stack.Screen name="Botao" componente={Botao}/>
            </stack.Navigator>
        </NavigationContainer>
    )
 }
 export default TelaReturn;