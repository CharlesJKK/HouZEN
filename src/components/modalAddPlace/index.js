import React from 'react';
import {View, Modal, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ModalAddPlace({modalIsVisible, setModalIsVisible}) {

    function postHouse(btnStr){
        if(btnStr === "anunciar"){
            Alert.alert("Casa anunciada com sucesso!")
            setModalIsVisible(false)
        }else{
            setModalIsVisible(false)
        }
    }

    return (
        <Modal
        animationType= "fade"
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
                        />
                    </View>
                    <View>
                        <Text>Número</Text>
                        <TextInput 
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Número da Casa ou Ap'
                        placeholderTextColor={'#fff'} 
                        />
                    </View>
                    <View>
                        <Text>Espaço Disponível</Text>
                        <TextInput 
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder='Quantidade de Pessoas'
                        placeholderTextColor={'#fff'} 
                        />
                    </View>
                    <View>
                        <Text>Prós</Text>
                        <TextInput 
                        placeholder='Ex: Casa grande, Lugar seguro, Climatizado e etc..'
                        multiline
                        placeholderTextColor={'#fff'} 
                        style={{...styles.textInput, height: 80}}
                        />
                    </View>
                    <View>
                        <Text>Preferências do dono</Text>
                        <TextInput 
                        placeholder='Ex: Não aceito pets e nem adolescentes, não gosto de barulho e etc..'
                        multiline
                        placeholderTextColor={'#fff'} 
                        style={{...styles.textInput, height: 80}}
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