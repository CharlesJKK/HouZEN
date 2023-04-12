import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={()=> {}}/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={()=> {}}/> 
      <TouchableOpacity title="Entrar" style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#fff'}}>ENTRAR</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer2}>
        <Button title="Crie uma conta" color="black" onPress={() => navigation.navigate('Register')}/>
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
    width: '50%',
    backgroundColor:'#006fff',
    borderRadius: 7,
    padding: 10
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
      marginTop: 20,
    },
});
