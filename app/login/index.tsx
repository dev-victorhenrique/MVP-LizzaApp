import { View,SafeAreaView,StatusBar,Text,TouchableOpacity,Image } from "react-native";
import Input from "./../../components/regsiter/inputs"
import styles from './styles'
import { useFonts } from 'expo-font';
import { useState } from "react";
import { useRouter } from "expo-router";
import {loginApi} from "./../../services/login"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Snackbar } from 'react-native-paper';
import { Link } from "expo-router";



export default function login(){
    const [fontsLoaded] = useFonts({
        'Carnac-Medium': require('../../assets/fonts/Carnac W03 Medium.ttf'), 
      });


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [visible, setVisible] = useState(false);
        const onToggleSnackBar = () => setVisible(!visible);
        const onDismissSnackBar = () => setVisible(false);

        const router = useRouter();

        const handleLogin = async () => {
            try {
                const token = await loginApi(email,password)
                console.log(token)
                AsyncStorage.setItem('token', token)
              

                router.replace('/home');

            
            } catch (error) {
                console.log(Snackbar)
                onToggleSnackBar()
                
               
            }
        }

    return(
       
        <SafeAreaView style={styles.container}> 
             <StatusBar   
                barStyle="dark-content" 
                backgroundColor="#ffffff" />

            <View style={styles.logo}>
              <Image style={styles.logoImage} source={require('../../assets/images/logo-lizza.png')}/>
            </View>

            <View style={styles.title}> 
                <Text style={styles.titleText}>Informe seus dados de login</Text>
            </View>

            <View style={styles.inputs}> 
                <View>
                    <Text style={styles.inputsText}>Email</Text>
                    <Input onChangeText={(text) => setEmail(text)} value={email}/>
                </View>

                <View>
                    <Text style={styles.inputsText}>Senha</Text>
                    <Input onChangeText={(text) => setPassword(text)} value={password} />
                </View>
               
            </View>

            <View style={styles.buttons}> 
                <View style={styles.forgetPassword}> 
                  
                </View>

                <View style={styles.btns}> 

                    <Link href="/register" >
                            <Text style={styles.confirmText2}>Cadastre-se</Text> 
                    </Link>

                   
                
                   <TouchableOpacity style={styles.confirm} onPress={handleLogin}>
                        <Text style={styles.confirmText}>Confirmar</Text> 
                   </TouchableOpacity>

                  
                </View>
            </View>

            <Snackbar
                style={{backgroundColor:"#D32F2F"}}
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Close',
              
            
                }}>
                Email ou senha incorretos
            </Snackbar>


        </SafeAreaView>
    )
   
}