import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        
    },

    logo:{
        width:244,
        height:85,
        bottom:"5%"
        
    },

    logoImage:{
        width:"100%",
        height:"100%",
        

    },

    title:{
        paddingBottom:30
    },

    titleText:{
        fontSize:24,
        textAlign:"center",
        color:"#434b4c",
        fontFamily:"Carnac-Medium",
   
    },

    subTitleText:{
        fontSize:16,
        textAlign:"center",
        color:"#434b4c",
        fontFamily:"Carnac-Medium",
    },

    paragraph:{
        width:300,
        paddingTop:30,
        fontSize:16,
        textAlign:"center",
        color:"#434b4c",
        fontFamily:"Carnac-Medium",
    },

    inputs:{
        width:"90%",
        gap:40,
        margin:20,
    },

    inputsText:{
        fontFamily:"Carnac-Medium",
        color:"#434b4c",
    },

    inputContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    buttons:{
        display:"flex",
        flexDirection:"row",
        gap:"25%",
        top:30
    },

    forgetPassword:{
       justifyContent:"center"
    },

    confirm:{
        width:144,
        height:44,
        backgroundColor:"#0095d9",
        padding:10,
        borderRadius:20
        
    },

    confirmText:{
        color:"#fff",
        textAlign:"center",
        fontSize:16,
        fontFamily:"Carnac-Medium",
    },

    linkText:{
        textDecorationLine:"underline",
        color:'blue',
        fontSize:16,
        fontFamily:"Carnac-Medium",
    }

    

})

export default styles;