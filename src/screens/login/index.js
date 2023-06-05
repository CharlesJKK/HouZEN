import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import api from '../../api/api'

export default function LoginScreen({ navigation }) {

  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState(false)
  const [usersInfo, setUsersInfo] = useState()

  const getData = async () => {
    const response = await api.get("/users")
    try{
      setUsersInfo(response.data)
    }catch{
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function handleLoginButton(){
    for (let index = 0; index < usersInfo.length; index++) {
      if(usersInfo[index].username == userName && usersInfo[index].password == userPassword){
        navigation.navigate('Home')
      }else if(userName == "" || userPassword == "" || usersInfo[index].username != userName || usersInfo[index].password != userPassword){
        setError(true)
      }
    }
    setTimeout(() => setError(false), 3000)
  }

  return (
    <View style={styles.container}>
      {error ? <Text style={{color: "red"}}>Preencha os campos corretamente.</Text> : <></>}
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={setUserName}/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setUserPassword}/> 
      <TouchableOpacity title="Entrar" style={styles.buttonContainer} onPress={handleLoginButton}>
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
