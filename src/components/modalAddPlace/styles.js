import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '90%',
        backgroundColor: '#A3A3A3',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    textInput:{
        backgroundColor: '#707070', 
        width: '60%', 
        borderRadius: 5,
        padding: 5,
        color: '#fff',
    },
    btnAction:{
        alignSelf: 'center', 
        margin: 15, 
        padding: 15, 
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    }
})

export default styles;