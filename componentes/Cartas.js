import React from 'react';
import {StyleSheet, Pressable, Dimensions, Text, renderizarP} from 'react-native';
import Asoes from './Sequencia';

//Favor iguinorar o nome da .js que esta cartas
//fiz com base em um jogo de cartas

const Botao = ({titulo, precionado}) => {
  //constancias dos botões com as sua cores respequitivas.
  cosnt [botaoAzul, setBotaoAzul] = useState('#0693E3');
  cosnt [botaoVermelho, setBotaoVermelho] = useState('#b80000');
  cosnt [botaoAmarelo, setBotaoAmarelo] = useState('#FCB900');
  cosnt [botaoVerde, setBotaoVerde] = useState('#008b02');
  //Gerando as sequencias de cores 
  cosnt [sequencia. setSequencia] = useState([]);
  cosnt [precionado, setPrecionado] = useState([]); //criando verificação de toque

  var botoes = [
    {
        id: 0,
        color: botaoVerde,
    },
    {
        id: 1,
        color: botaoVermelho,
    },
    {
        id: 2,
        color: botaoAmarelo,
    },
    {
        id: 3,
        color: botaoAzul,
    },
];

//cores dos botoes apagados
const coresDes = [
    {
        id: 0,
        color: '#194d1a',
    },
    {
        id: 1,
        color: '#820909',
    },
    {
        id: 2,
        color: '#9c7f06',
    },
    {
        id: 3,
        color: '#0372b0',
    }
];

//cores dos botoes ativados
const coresAt = [
    {
        id: 0,
        color: '#008b02',
    },
    {
        id: 1,
        color: '#b80000',
    },
    {
        id: 2,
        color: '#FCB900',
    },
    {
        id: 3,
        color: '#0693E3',
    },
];
//Botoes não ativados
function botaoDesligado(){
    setBotaoVerde(coresDes[0].color);
    setBotaoVermelho(coresDes[1].color);
    setBotaoAmarelo(coresDes[2].color);
    setBotaoAzul(coresDes[3].color);
  }

  //Botoes ativados exibindo cores vivas
  async function BotaoAtivo(id) {
    botaoDesligado();
    switch (id) {
        case 0:
            setBotaoVerde(coresAt[id].color);
            break;
        case 1:
            setBotaoVermelho(coresAt[id].color);
            break;
        case 2:
            setBotaoAmarelo(coresAt[id].color);
            break;
        case 3:
            setBotaoAzul(coresAt[id].color);
            break;
    }
    await DelayNode(1000);
    botaoDesligado();
  }

  //logo abaixo exibi as cores ativadas do botão que esta trazendo da variavel acima
  const Item = ({id, color}) => (
    <Pressable
    key={id}
    precionado={() => botaoPrecionado(id, color)}
    style={styles.apertado}>
    <View style={[styles.button, {backgroundColor: color}]}/>
    </Pressable>
  );

  const renderizarP = props => {
    let component = [];
    botoes.map((item, index) => {
        component.push(<Item ley={index} id={item.id} color={item.color}/>);
    });
    return component;
  };

  return (
    <Pressable onPress={precionado} style={styles.botoes}>
      <Text style={styles.title}>{titulo}</Text>
    </Pressable>
  );
};

export default Botao;

const styles = StyleSheet.create({
  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  title: {
    color: '#777777',
    textTransform: 'uppercase',
  },
  tituloText: {
    fontSize: 20,
    color: '#777777',
    textAlign: 'center',
    },
  button: {
    height: (Dimensions.get('screen').width - 60) / 1.6,
    width: (Dimensions.get('screen').width - 60) / 3,
    borderRadius: 20,
},
});
