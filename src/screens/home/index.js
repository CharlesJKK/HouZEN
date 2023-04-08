import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles';
import ModalAddPlace from '../../components/modalAddPlace';

export default function HomeScreen() {

    const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <View style={styles.container}>
        <>
            <ModalAddPlace modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible}/>
        </>
        <Text style={styles.welcomeTxt}>Seja Bem-Vindo!</Text>
        <TouchableOpacity style={styles.btnOption}>
            <FontAwesome5 name="search-location" size={24} color="white" />
            <Text style={styles.optionTxt}>Procuro um espaço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOption} onPress={() => setModalIsVisible(true)}>
            <FontAwesome5 name="house-user" size={24} color="white" />
            <Text style={styles.optionTxt}>Tenho um espaço</Text>
        </TouchableOpacity>
    </View>
  );
}
