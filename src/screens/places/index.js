import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import placesData from '../../mocks/mocks';

export default function PlacesScreen({ navigation }) {

    return(
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: 40}}>
                <TouchableOpacity style={{position: 'absolute', left: 10}} onPress={() => navigation.push('Home')}>
                    <Ionicons name="caret-back-circle-outline" size={42} color="black"/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>Casas Disponíveis</Text>
            </View>
            <FlatList
                data={placesData}
                style={{paddingTop: 20, marginTop: 10, paddingBttom: 20, marginBottom: 120}}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image source={require('../../assets/houseEx.png')} style={{maxWidth: 140, height: 80}}/>
                        <View style={{maxWidth: 185, gap: 5}}>
                            <Text style={styles.informationsTxt}>Endereço: {item.address}</Text>
                            <Text style={styles.informationsTxt}>Número da Casa ou Ap: {item.number}</Text>
                            <Text style={styles.informationsTxt}>Espaço disponível para: {item.availableSpace}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        marginBottom: 20,
        backgroundColor: '#A7B0A8',
        padding: 10,
        borderRadius: 10,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    informationsTxt:{
        color: '#fff',
        fontWeight: '700'
    }
})