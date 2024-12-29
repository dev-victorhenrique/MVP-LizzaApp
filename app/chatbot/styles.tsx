import { StyleSheet } from "react-native";
import Chatbot from ".";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },

  

    content:{
        flex:1,
        marginBottom:50
    },

    avatar:{
        backgroundColor:"#fff",
        width:51,
        height:60,
        borderRadius:"50%",
        shadowColor: "#000", // Cor da sombra
        shadowOffset: { width: 0, height: 4 }, // Deslocamento
        shadowOpacity: 0.3, // Opacidade
        shadowRadius: 5, // Raio de desfoque
    }
})

export default styles;