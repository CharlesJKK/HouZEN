import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeTxt}>Seja Bem-Vindo!</Text>
        <TouchableOpacity style={styles.btnOption}>
            <FontAwesome5 name="search-location" size={24} color="white" />
            <Text style={styles.optionTxt}>Procuro um espaço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOption}>
            <FontAwesome5 name="house-user" size={24} color="white" />
            <Text style={styles.optionTxt}>Tenho um espaço</Text>
        </TouchableOpacity>
    </View>
  );
}
