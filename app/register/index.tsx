import { View,SafeAreaView,StatusBar,Text,TouchableOpacity,Image } from "react-native";
import Input from "./../../components/regsiter/inputs"
import styles from './styles'
import { Link } from "expo-router";
import { useFonts } from 'expo-font';
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";

export default function login(){
    const [fontsLoaded] = useFonts({
        'Carnac-Medium': require('../../assets/fonts/Carnac W03 Medium.ttf'), // Caminho para a fonte
      });

      const [passwordVisible, setPasswordVisible] = useState(false);
      const [password, setPassword] = useState("");
    return(
       
        <SafeAreaView style={styles.container}> //container
             <StatusBar   
                barStyle="dark-content" 
                backgroundColor="#ffffff" />

            <View style={styles.logo}>//logo 
              <Image style={styles.logoImage} source={require('../../assets/images/logo-lizza.png')}/>
            </View>

            <View style={styles.title}> //title
                <Text style={styles.titleText}>Redefinir Senha</Text>
                <Text style={styles.subTitleText}>Insira seu e-mail para redefinir sua senha</Text>
                <Text style={styles.paragraph}>Iremos te enviar um e-mail para confirmar sua acao </Text>
            </View>

            <View style={styles.inputs}> //inputs
                <View>
                    <Text style={styles.inputsText}>Email</Text>
                    <Input/>
                    
                </View>

                <View>
                    <Text style={styles.inputsText}>Senha</Text>
                    <Input/>
                </View>

                <View>
                    <Text style={styles.inputsText}>Senha</Text>
                    <Input/>
                </View>
               
            </View>

            <View style={styles.buttons}> //buttons
                <View> //continue
                   <TouchableOpacity style={styles.confirm}>
                        <Text style={styles.confirmText}>Confirmar</Text>
                   </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    )
   
}