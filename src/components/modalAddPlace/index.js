import React, {useState, useEffect} from 'react';
import {View, Modal, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 
import api from '../../api/api';

export default function ModalAddPlace({modalIsVisible, setModalIsVisible}) {

    const [address, setAddress] = useState("")
    const [number, setNumber] = useState(0)
    const [price, setPrice] = useState(0)
    const [preferences, setPreferences] = useState("")

    const postData = async () => {
        await api.post("/houses", {
          'address': address,
          'houseNumber': number,
          'price': price,
          'preferences': preferences
        })
      }

    function postHouse(btnStr){
        if(btnStr === "anunciar"){
            postData()
            setAddress("")
            setNumber(0)
            setPrice(0)
            setPreferences("")
            Alert.alert("Casa anunciada com sucesso!")
            setModalIsVisible(false)
        }else{
            setModalIsVisible(false)
        }
    }

    return (
        <Modal
        animationType= "slide"
        visible={modalIsVisible}
        onRequestClose={() => {setModalIsVisible(false)}}>
            <View style={styles.container}>  
                <TouchableOpacity style={{alignSelf: 'flex-end', padding: 10}} onPress={() => setModalIsVisible(false)}>
                    <FontAwesome5 name="window-close" size={32} color="white" />
                </TouchableOpacity>
                <Text style={{fontSize: 20, padding: 8}}>Dê detalhes sobre a casa:</Text>
                <View style={{padding: 16, gap: 10, justifyContent: 'center'}}>
                    <View>
                        <Text>Endereço</Text>
                        <TextInput 
                        style={styles.textInput}
                        multiline
                        placeholder='Nome da Rua ou Avenida'
                        placeholderTextColor={'#fff'}
                        onChangeText={setAddress}
                        />
                    </View>
                    <View>
                        <Text>Número</Text>
                        <TextInput 
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Número da Casa ou Ap'
                        placeholderTextColor={'#fff'} 
                        onChangeText={setNumber}
                        />
                    </View>
                    <View>
                        <Text>Valor do local</Text>
                        <TextInput 
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Preço'
                        placeholderTextColor={'#fff'} 
                        onChangeText={setPrice}
                        />
                    </View>
                    <View>
                        <Text>Preferências do dono</Text>
                        <TextInput 
                        placeholder='Ex: Não aceito pets e nem adolescentes, não gosto de barulho e etc..'
                        multiline
                        placeholderTextColor={'#fff'} 
                        style={{...styles.textInput, height: 80}}
                        onChangeText={setPreferences}
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{...styles.btnAction, backgroundColor: '#39A135'}} onPress={() => postHouse("anunciar")}>
                        <Text style={{fontWeight: '700', textTransform: 'uppercase'}}>Anunciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btnAction, backgroundColor: '#D12828'}} onPress={() => postHouse("")}>
                        <Text style={{fontWeight: '700', textTransform: 'uppercase'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
  }