import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image, } from 'react-native';
import api from '../../api/api';
import { Ionicons } from '@expo/vector-icons';

export default function PlacesScreen({ navigation }) {


    const [houseData, setHouseData] = useState()
    const [id, setId] = useState()
  
    const getData = async () => {
      try{
        const response = await api.get("/houses")
        setHouseData(response.data)
      }catch{
      }
    }

    const deleteHouse = id => {
        try{
          api.delete(`/houses/${id}`)
        }catch{

        }finally{
            getData()
        }
      }
  
    useEffect(() => {
        console.disableYellowBox = true
        getData()
    }, [id])

    return(
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: 40}}>
                <TouchableOpacity style={{position: 'absolute', left: 10, padding: 10}} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="caret-back-circle-outline" size={42} color="black"/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>Casas Disponíveis</Text>
            </View>
            <FlatList
                data={houseData}
                style={{paddingTop: 20, marginTop: 10, paddingBttom: 20, marginBottom: 120}}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <>
                    <TouchableOpacity onPress={() => {deleteHouse(item.id)}}>
                        <Ionicons name="trash" size={24} color="black" />
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('PlaceItem', {
                            address: item.address,
                            number: item.houseNumber,
                            value: item.price,
                            preferences: item.preferences
                        })}>
                            <Image source={require('../../assets/houseEx.png')} style={{maxWidth: 140, height: 80}}/>
                            <View style={{maxWidth: 185, gap: 5}}>
                                <Text style={styles.informationsTxt}>Endereço: {item.address}</Text>
                                <Text style={styles.informationsTxt}>Número da Casa ou Ap: {item.houseNumber}</Text>
                                <Text style={styles.informationsTxt}>Valor: R$ {item.houseNumber} Reais</Text>
                            </View>
                        </TouchableOpacity>
                    </>
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