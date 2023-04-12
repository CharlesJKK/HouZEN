import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {

  function handleBlackAction(){
    navigation.push('Login')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={()=> {}}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        onChangeText={()=> {}}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={()=> {}}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={()=> {}}
      /> 
      <Button title="Criar Conta" color="green" onPress={() => handleBlackAction()}/>
      <View style={styles.buttonContainer2}>
        <Button title="Já tem uma conta? entre aqui" color="black" onPress={() => handleBlackAction()}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: "center",
    width: '90%',
    backgroundColor:'green',
    borderRadius: 7
  },
  input: {
     backgroundColor:'#f0f0f0',
     width: '90%',
     marginBottom:15,
     color: '#222',
     fontSize: 18,
     borderRadius: 7,
     padding: 10
  },
  buttonContainer2: {
      justifyContent: 'space-around',
      alignItems: "center",
      width: '90%',
      marginTop: 20
  },
});
