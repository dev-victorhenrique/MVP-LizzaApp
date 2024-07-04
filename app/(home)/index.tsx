import { View, Text, Pressable, Image, ImageBackground } from "react-native";

import { styles } from "./index.style";

export default function HomeScreen() {
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

                <Pressable>
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
        </View>
    )
}