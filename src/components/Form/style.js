import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#ffffff",
        marginTop:30,
        paddingHorizontal:"10%",
        paddingVertical:"10%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        widht:"100%",
        height:"auto",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingHorizontal:5,
    },
    input:{
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        marginVertical:6,
        paddingHorizontal:10,
    },
    buttonCalculator:{
        alignItems:"center",
        borderRadius:50,
        justifyContent:"center",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginTop:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingHorizontal:5,
    },
    exibitionResultImc:{
        widht:"100%",
        height:"50%",
    }
});

export default styles