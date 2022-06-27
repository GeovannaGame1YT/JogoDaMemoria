import React from "react";
import { SafeAreaView, View, Image, Button, StyleSheet } from "react-native";

import Botao from "./Cartas";



const TelaPrincipal = () => {
    function onPress() {
        navigator.navigator(<Botao/>);
    }
    return (
        <View style={styles.continue}>
            <View style={styles.main}>
                <Button titulo="Botao" precionado={onPress}/>
            </View>
        </View>
    );
};

export default TelaPrincipal;
const styles = StyleSheet.create({
    continue:{
        flex: 1,
        padding: 32,
        backgroundColor: '#b7f0e4',
    },
    main: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    lmg: {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center',
    },
});