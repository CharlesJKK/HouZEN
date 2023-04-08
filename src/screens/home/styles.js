import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        gap: 30
    },
    welcomeTxt:{
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '700'
    },
    btnOption:{
        flexDirection: 'row',
        backgroundColor: '#5C2387',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        gap: 20,
        borderRadius: 5,
        padding: 40,
        width: '80%'
    },
    optionTxt:{
        color: '#fff'
    }
})

export default styles;