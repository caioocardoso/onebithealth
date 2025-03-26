import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30, 
    },
    form:{
        widht:"100%",
        height:"auto",
        marginTop:30,
        paddingVertical:10,
        marginHorizontal:"10%"
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
        marginVertical:12,
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
    }
});

export default styles