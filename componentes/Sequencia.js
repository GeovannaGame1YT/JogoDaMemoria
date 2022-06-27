import React from "react";
import {  StyleSheet, Text, View, TouchableOpacity, Alert, } from "react-native";
import Botao from "./Cartas";

const Asoes = () =>{
    cosnt [pontos, setPontos] = useState(0); //fazendo a pontuação do jogo
    cosnt [titulo, setTitulo] = useState(''); //gerando os texto e frases do jogo
    cosnt [bloqueio, setBloqueio] = useState(false); //bloquei de conponestes
    cosnt [esconder, setEsconder] = useState(true); //visibilidade dos componenstes

    async function resetJogo() {
        await new Promise((resolve, reject) => {
          setBloqueio(false);
          setEsconder(true);
          setPontos(0);
    
          sequencia.length = 0;
          setSequencia([]);
    
          precionado.length = 0;
          setPrecionado([]);
    
          resolve();
        });
        initial();
      }

      function verificarClik() {
        let i = 0;

    let isContinue = true;

    //verificação da sequenci se esta coreta
    for (let id of precionado) {
      if (id !== sequencia[i]) {
        gameOverSon();
        setBloqueio(true);
        setEsconder(false);
        Alert.alert('Game-over', 'Você errou a sequência de cores não desanime Tente Novamente');
        setTitle('Game-over');
        isContinue = false;
        break;
      }
      i++;
    }

    //acertos na sequencia gera pontos
    if (sequencia.length === precionado.length && isContinue) {
      setPrecionado([]);
      setPontos(pontos + 1);
      getSequencia();
    }
  }

  function botaoPrecionado(id) {
    if (bloqueio === false) {}
  }

  //Geração dos numeros equivalente aos botoes coloriados
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  //iniciando a aprtida gerando sequenci e exibindo as cores e as frases
  async function getSequencia() {
    setBloqueio(true);
    setTitulo('Fique Atento com a sequência');

    const proximaCor = getRandomNumber(0, 4);
    sequencia.push(proximaCor);
    setSequencia(sequencia);

    for (let id of sequencia) {
        await delay(2000);
        BotaoAtivo(id);
    }

    await delay(2500);
    setBloqueio(false);
    setTitulo('Vez Do Jogador');
  }

  function initial() {
    getSequencia();
  }

    //Aqui é onde é exibido as frase já com o estilo
    const tituloText = ({Text}) => <Text style={styles.tituloText}></Text>;
    
    //Reiniciando a partida e exibibindo os pontos 
  return (
    <View style={styles.continue}>
        <View style={styles.viewPontos}>
            <tituloText text={`pontos: ${pontos}`}/>
        </View>
        <tituloText text={titulo}/>
        <View style={styles.viewAper}>{renderizarP()}</View>
        {esconder === true ? (
            <View/>
        ) : (
            <Botao title="Reiniciar partida" precionado={resetJogo}/>
        )}
    </View>
  );

}

export default Asoes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#B7B7B7',
        flexDirection: 'column',
    },
    viewPontos: {
        flexDirection: 'row-reverse',
        padding: 10,
    },
    viewAper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    },
});