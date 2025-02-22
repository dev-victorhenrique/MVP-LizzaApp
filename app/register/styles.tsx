import { StyleSheet } from "react-native"


 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    },

    header:{
       marginTop:"10%"
    },

    inputs:{
        marginTop:20,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:10
    },

    textHeader:{
        fontSize:24,
        textAlign:"center"
    },

    btn:{
        width:144,
        height:44,
        backgroundColor:"#0095d9",
        padding:10,
        borderRadius:20,
    },

    Registerbutton:{
       display:"flex",
       flexDirection:"column",
       gap:10
    },


    btnText:{
        color:"#fff",
        textAlign:"center",
        fontSize:16,
        fontFamily:"Carnac-Medium",
    },

    footer:{
        marginTop:40,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },

    logo:{
        width:290,
        height:100,
        marginLeft:"10%",
        marginTop:"10%"
        
    },

    logoImage:{
        width:"100%",
        height:"100%"
    }
})


export default styles;