import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function PlaceItem({ route, navigation }) {

    const { address, number, value, pros, preferences } = route.params;

    function handleContactAdvertiser(){
        Alert.alert('Chat com o anunciante iniciado')
        navigation.push('Places')
    }

    return (
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: 40}}>
                <TouchableOpacity onPress={() => navigation.push('Places')} style={{position: 'absolute', left: 10, padding: 10}}>
                    <Ionicons name="caret-back-circle-outline" size={42} color="black"/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>Casa selecionada</Text>
            </View>
            <Image source={require('../../assets/houseEx.png')} style={{width: '100%', height: 200, marginTop: 40}}/>
            <View style={styles.informationContainer}>
                <Text style={styles.informationsTxt}>Endereço: {address}</Text>
                <Text style={styles.informationsTxt}>Número da casa ou ap: {number}</Text>
                <Text style={styles.informationsTxt}>Valor: R$ {value} Reais</Text>
                <Text style={styles.informationsTxt}>Preferências do dono: {preferences === "" ? "Nenhuma preferência" : preferences}</Text>
            </View>
            <TouchableOpacity style={styles.contactBtn} onPress={() => handleContactAdvertiser()}>
                <Text style={{fontSize: 20, fontWeight:'700', textTransform: 'uppercase', color: '#fff'}}>contatar anunciante</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    informationContainer:{
        width: '100%',
        backgroundColor: '#CBD6CD',
        alignItems: 'flex-start', 
        padding: 10,
        gap: 10, 
        marginTop: 40,
        borderRadius: 5,
        borderWidth: 1
    },
    informationsTxt:{
        fontSize: 20,
        fontWeight: '500'
    },
    contactBtn:{
        backgroundColor: '#0080ff', 
        padding: 20, 
        width: '75%', 
        alignItems: 'center', 
        borderRadius: 5, 
        alignSelf: 'center', 
        marginTop: 40
    }
})
