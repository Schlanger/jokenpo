import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

class Icone extends Component{

    constructor(props){
      super(props);
    }
  
    render(){
  
      //this.props.escolha
      //this.props.jogador
  
      if(this.props.escolha == "pedra"){
  
        return(
          <View style={styles.palco}>
            <Text>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/pedra.png')}></Image>
          </View>
        );
  
      }else if(this.props.escolha == "papel"){
  
        return(
          <View style={styles.palco}>
           <Text>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/papel.png')}></Image>
          </View>
        );
  
      }else if(this.props.escolha == "tesoura"){
  
        return(
          <View style={styles.palco}>
            <Text>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/tesoura.png')}></Image>
          </View>
        );
        
      }else{
        return false;
      }
    }
  
  }

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

  export default Icone;