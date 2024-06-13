import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native'; 

class App extends Component{

 
  render(){

    let nome = 'Caro amigo, Steve 💖';
    

    return(
      <View style={{ marginTop: 20}}>
        <Text style={{ marginTop:25, textAlign:'center'}}>Olá Mundo!!!!</Text>
        <Text style={{textAlign:'center'}}>Meu Primeiro App</Text>    
        <Text style={{ color: '#FF0034', fontSize: 25, margin: 45,textAlign:'center' }}>
          Sujeito Programador
        </Text>

       <Jobs/>

        <Text style={{ fontSize: 30,margin:32,textAlign:'center' }}> {nome} </Text>
        
      </View>
    );
  }
}

class Jobs extends Component{
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <Image 
        
        source={{uri:img}}
        style={{ width:400, height:300, jutifyContent:'center'}}/>
    );
  }
}

export default App;
