import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function RegisterScreen() {
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
         <View style={styles.buttonContainer}>
      <Button title="Criar" color="green" 
      />
    </View>
    <View style={styles.buttonContainer2}>
      <Button title="Já tem uma conta? entre aqui" color="black"  
      />
    </View>

    </View>

 
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: "center",
    width: '90%',
    backgroundColor:'green',
    borderRadius: 7
    
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: 'black',
      width: '100%',
      
  },
    input: {
     backgroundColor:'white',
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
      
    },
});
