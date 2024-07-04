import { 
    View, 
    Text, 
    Pressable, 
    Image, 
    ImageBackground, 
    TouchableOpacity 
} from "react-native";

import { Link } from "expo-router";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";


import { styles } from "./index.style";

export default function HomeScreen() {
    const homeModalizeRef = useRef<Modalize>(null)

    const onOpen = () => {
        if (homeModalizeRef.current) {
            homeModalizeRef.current.open()
        } else {
            console.error('modalizeRef está null')
        }
    }
    
    const onClose = () => {
        if (homeModalizeRef.current) {
            homeModalizeRef.current.close()
        } else {
            console.error('modalizeRef está null')
        }
    }
    
    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <View style={styles.header_userArea}>
                    <Pressable>
                        <Image 
                            // style={styles.}
                            source={require('@/assets/vectors/perfil-icon.png')} 
                            resizeMode="cover"
                        />
                    </Pressable>
                </View>

                <View style={styles.header_appStatusArea}>
                    <Text>
                        Status do app
                    </Text>
                </View>
            </View>

            <View style={styles.mainContent} >
                <Text style={styles.mainContent_showUsername}>
                    Seja Bem-Vindo, Victor.
                </Text>

                <Pressable onPress={onOpen}>
                    <ImageBackground 
                        style={styles.mainContent_emergencyBtn}
                        source={require('@/assets/vectors/bg-effect-btn.png')} 
                        resizeMode="cover"
                    >
                        <Text style={styles.mainContent_emergencyBtn_text}>
                            Pedir socorro
                        </Text>
                    </ImageBackground>
                </Pressable>
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

            <Modalize 
                ref={homeModalizeRef}
                adjustToContentHeight={true}
                panGestureEnabled={false}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalContent_warningText}>
                            Você tem certeza que deseja efetuar um pedido de socorro?    
                        </Text>

                        <View style={styles.modalContent_modalControlArea}>
                            <Link href={'./emergencyActivation'} asChild>
                                <TouchableOpacity style={styles.modalContent_modalControlArea_confirmBtn}>
                                    <Text style={styles.modalContent_modalControlArea_confirmBtnText}>
                                        Efetuar pedido de socorro
                                    </Text>
                                </TouchableOpacity>
                            </Link>

                            <TouchableOpacity style={styles.modalContent_modalControlArea_cancelBtn} onPress={onClose}>
                                <Text style={styles.modalContent_modalControlArea_cancelBtnText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modalize>
        </View>
    )
}