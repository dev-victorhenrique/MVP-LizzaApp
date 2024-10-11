import { 
    View, 
    Text,
    Image, 
    ImageBackground, 
    TouchableOpacity,
    Switch
} from "react-native";
import MyTask from "@/services/MyTask";

import { Link } from "expo-router";
import { useRef, useState } from "react";
import { Modalize } from "react-native-modalize";

import { styles } from "./index.style";
import call from 'react-native-phone-call'; 

export default function HomeScreen() {

    const CallButton = () => {
          const args = {
            number: '+55 (11)933089944', // Número para o qual você quer ligar
            prompt: true,         // Define se vai mostrar o prompt para confirmar a ligação
          };
      
          call(args).catch(console.error);  
        
    }


    const emergencyModalHomeModalizeRef = useRef<Modalize>(null)
    const statusAppHomeModalizeRef = useRef<Modalize>(null)

    const [statusAppSwitchValue, setStatusAppSwitchValue] = useState(true)

    const emergencyModalOnOpen = () => {
        if (emergencyModalHomeModalizeRef.current) {
            emergencyModalHomeModalizeRef.current.open()
        } else {
            console.error('modalizeRef está null')
        }
    }
    
    const emergencyModalOnClose = () => {
        if (emergencyModalHomeModalizeRef.current) {
            emergencyModalHomeModalizeRef.current.close()
        } else {
            console.error('modalizeRef está null')
        }
    }

    const statusAppModalOnOpen = () => {
        if (statusAppHomeModalizeRef.current) {
            statusAppHomeModalizeRef.current.open()
        } else {
            console.error('modalizeRef está null')
        }
    }
    
    const statusAppModalOnClose = () => {
        if (statusAppHomeModalizeRef.current) {
            statusAppHomeModalizeRef.current.close()
        } else {
            console.error('modalizeRef está null')
        }
    }

    const toggleStatusAppSwitchValueConfirmation = () => { statusAppModalOnOpen() }
    
    const toggleStatusAppSwitchValue = () => { 
        setStatusAppSwitchValue(!statusAppSwitchValue) 
        statusAppModalOnClose()

        /*ativar segundo plano
            após clicar, verifique o console e coloque o app em foreground (apenas saia do aplicativo sem fechá-lo) e observe novamente o console no android

             abaixo o código para ser implementado pelo Victor, assim que o usuario clica em ligar funcionamento do app:
        */
        MyTask.register()
        .then(() => console.log("task registered"))
        .catch(error => console.log(error))

       /*Desativar segundo plano
            após clicar, verifique o console, pois deverá aparecer task unregistered, logo o sistema em segundo plano deverá ser desativado, contudo coloque o app em foreground e nao deverá aparecer nada no console

            abaixo o código para ser implementado pelo Victor, assim que o usuario clica em desligar funcionamento do app:


            MyTask.unregister()
            .then(() => console.log("task unregistered"))
            .catch(error => console.log(error))

        */
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <View style={styles.header_userArea}>
                    <TouchableOpacity>
                        <Image 
                            // style={styles.}
                            source={require('@/assets/vectors/perfil-icon.png')} 
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.header_appStatusArea}>
                    <Text style={styles.header_appStatusArea_label}>
                        Status do app
                    </Text>

                    <Switch
                        value={statusAppSwitchValue}
                        onValueChange={toggleStatusAppSwitchValueConfirmation}
                    />
                </View>
            </View>

            <View style={styles.mainContent} >
                <Text style={styles.mainContent_showUsername}>
                    Seja Bem-Vindo, Victor.
                </Text>

                <TouchableOpacity onPress={emergencyModalOnOpen}>
                    <ImageBackground 
                        style={styles.mainContent_emergencyBtn}
                        source={require('@/assets/vectors/bg-effect-btn.png')} 
                        resizeMode="cover"
                    >
                        <Text style={styles.mainContent_emergencyBtn_text}>
                            Pedir socorro
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.footer} >
                <View style={styles.footer_logoImgArea}>
                    <Image
                        style={styles.footer_logoImgArea_logoImg}
                        source={require('@/assets/logos/logo-lizza-primária.png')}
                        resizeMode="contain"
                    />
                </View>
                
                <View style={styles.footer_contactInformationsArea}>
                    <Text style={styles.footer_contactInformationsArea_supportPhone}>
                        Atendimento: +55 11 xxxxx-xxxx
                    </Text>

                    <Text style={styles.footer_contactInformationsArea_websiteURL}>
                        www.lizza.com.br
                    </Text>
                </View>
            </View>

            {/* Emergency request confirmation modal */}
            <Modalize 
                ref={emergencyModalHomeModalizeRef}
                adjustToContentHeight={true}
                panGestureEnabled={false}
                >
                    <View style={styles.modalHomeContent}>
                        <Text style={styles.modalHomeContent_warningText}>
                            Você tem certeza que deseja efetuar um pedido de socorro?    
                        </Text>

                        <View style={styles.modalHomeContent_modalControlArea}>
                            <Link href={'./emergencyActivation'} asChild>
                                <TouchableOpacity style={styles.modalHomeContent_modalControlArea_confirmBtn} onPress={CallButton}>
                                    <Text style={styles.modalHomeContent_modalControlArea_confirmBtnText}>
                                        Efetuar pedido de socorro
                                    </Text>
                                </TouchableOpacity>
                            </Link>

                            <TouchableOpacity style={styles.modalHomeContent_modalControlArea_cancelBtn} onPress={emergencyModalOnClose}>
                                <Text style={styles.modalHomeContent_modalControlArea_cancelBtnText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modalize>

            {/* Toggle status app confirmation modal */}
            <Modalize 
                ref={statusAppHomeModalizeRef}
                adjustToContentHeight={true}
                panGestureEnabled={false}
                >
                    <View style={styles.modalHomeContent}>
                        <Text style={styles.modalHomeContent_warningText}>
                            {  
                            statusAppSwitchValue ? 
                                'Você tem certeza que deseja desligar o funcionamento do app?' : 
                                'Você desejar ligar o funcionamento do app?'
                            }    
                        </Text>

                        <View style={styles.modalHomeContent_modalControlArea}>
                            <TouchableOpacity 
                                style={styles.modalHomeContent_modalControlArea_confirmBtn}
                                onPress={toggleStatusAppSwitchValue}
                            >
                                <Text style={styles.modalHomeContent_modalControlArea_confirmBtnText}>
                                    {  
                                    statusAppSwitchValue ? 
                                        'Desligar o funcionamento do app' : 
                                        'Ligar o funcionamento do app'
                                    }
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalHomeContent_modalControlArea_cancelBtn} onPress={statusAppModalOnClose}>
                                <Text style={styles.modalHomeContent_modalControlArea_cancelBtnText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modalize>
        </View>
    )
}
