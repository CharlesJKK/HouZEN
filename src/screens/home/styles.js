import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 20,
        gap: 30
    },
    welcomeTxt:{
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24
    },
    btnOption:{
        flexDirection: 'row',
        backgroundColor: '#5C2387',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        borderRadius: 5,
        padding: 40
    },
    optionTxt:{
        color: '#fff'
    }
})

export default styles;