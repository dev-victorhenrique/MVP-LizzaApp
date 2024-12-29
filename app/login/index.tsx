import { View,SafeAreaView,StatusBar,Text,TouchableOpacity,Image } from "react-native";
import Input from "./../../components/regsiter/inputs"
import styles from './styles'
import { Link } from "expo-router";
import { useFonts } from 'expo-font';
import { useState } from "react";
import { useRouter } from "expo-router";
import {loginApi} from './../../services/login'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login(){
    const [fontsLoaded] = useFonts({
        'Carnac-Medium': require('../../assets/fonts/Carnac W03 Medium.ttf'), // Caminho para a fonte
      });


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [visible, setVisible] = useState(false);

        const router = useRouter();

        const handleLogin = async () => {
            try {

                const token = await loginApi(email,password)
                console.log(token)
            await AsyncStorage.setItem('accesToken',token)

            router.replace('/home');

            
            } catch (error) {
                setVisible(true)
            }
        }

    return(
       
        <SafeAreaView style={styles.container}> //container
             <StatusBar   
                barStyle="dark-content" 
                backgroundColor="#ffffff" />

            <View style={styles.logo}>//logo 
              <Image style={styles.logoImage} source={require('../../assets/images/logo-lizza.png')}/>
            </View>

            <View style={styles.title}> //title
                <Text style={styles.titleText}>Informe seus dados de login</Text>
            </View>

            <View style={styles.inputs}> //inputs
                <View>
                    <Text style={styles.inputsText}>Email</Text>
                    <Input onChangeText={(text) => setEmail(text)}/>
                </View>

                <View>
                    <Text style={styles.inputsText}>Senha</Text>
                    <Input/>
                </View>
               
            </View>

            <View style={styles.buttons}> //buttons
                <View style={styles.forgetPassword}> //forgetPassword
                    <Link style={styles.linkText} href={"/register"}>Esqueci a senha</Link>
                </View>

                <View> //continue
                
                   <TouchableOpacity style={styles.confirm}>
                        <Link href={"/(tabs)/home"}>
                            <Text style={styles.confirmText}>Confirmar</Text>
                        </Link>
                       
                   </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    )
   
}