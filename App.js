/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  AppRegistry,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado:''};
  }

  jokenpo(escolhaUsuario){
    //gera numero aleatorio 0,1,2
    var numAleatorio = Math.floor(Math.random()*3);

    var escolhaComputador = "";

    switch(numAleatorio){
      case 0:
        escolhaComputador = "pedra";
        break;
      case 1:
        escolhaComputador = "papel";
        break;
      default:
        escolhaComputador = "tesoura";
        break;
    }

    var resultado = "";

    if(escolhaUsuario == "pedra")
    {
      switch(numAleatorio){
        case 0:
          resultado = "Empate";
          break;
        case 1:
            resultado = "Perdeu...";
          break;
        default:
            resultado = "Ganhou!!";
          break;
      }
    }else if(escolhaUsuario == "papel"){
      switch(numAleatorio){
        case 0:
            resultado = "Ganhou!!";
            break;
        case 1:
            resultado = "Empate";
            break;
        default:
            resultado = "Perdeu...";
            break;
      }
    }else{
      switch(numAleatorio){
        case 0:
            resultado = "Perdeu...";
            break;
        case 1:
            resultado = "Ganhou!!";
            break;
        default:
            resultado = "Empate";
            break;
      }
    }

    //alert(escolhaUsuario);
    this.setState({escolhaUsuario:escolhaUsuario, 
      escolhaComputador:escolhaComputador,
      resultado:resultado});
  }

  render(){
  
    return (
      <View>

        <Topo></Topo>
        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
          <Button title="pedra" onPress={()=>{this.jokenpo("pedra")}}/>
          </View>
          <View style={styles.btnEscolha}>
          <Button title="papel" onPress={()=>{this.jokenpo("papel")}}/>
          </View>
          <View style={styles.btnEscolha}>
          <Button title="tesoura" onPress={()=>{this.jokenpo("tesoura")}}/>
          </View>

        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador="Computador"></Icone>

          <Icone escolha={this.state.escolhaUsuario} jogador="Usuário"></Icone>

        </View>

        
      </View>
    );

  }
};

//const App = ()=>{
  //<Programa></Programa>
//}

AppRegistry.registerComponent('App', ()=>App);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  btnEscolha: {
      width:90,
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  palco:{
    alignItems: 'center',
    marginTop: 10,
  },

  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height:60,
  },

  txtJogador:{
      textAlign:"center",
      fontSize:35,
      color: "green"
  },

});

export default App;
