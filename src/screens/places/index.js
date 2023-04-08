import React from 'react';
import {View, Text, TouchableOpacity, FlatList, } from 'react-native';
import placesData from '../../mocks/mocks';

export default function PlacesScreen() {

    return(
        <View>
            <FlatList
                data={placesData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.address}</Text>
                    </View>
                )}
            />
        </View>
    );
}