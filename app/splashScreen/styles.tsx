import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },

    gradient:{
        flex:1
    },

    texts:{
        display:"flex",
        flexDirection:"column",
        gap:10,
        paddingBottom:"60%"
    },

    textWelcome:{
        color:"#fff",
        textAlign:"center",
        fontSize:27,
        fontWeight:"bold",
        paddingBottom:10
    },

    textInfo:{
        color:"#fff",
        textAlign:"center",
        fontSize:25,
    }

    
})

export default styles;