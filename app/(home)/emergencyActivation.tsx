import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./emergencyActivation.style";
import { Link } from "expo-router";

export default function EmergencyActivationScreen () {
    return(
        <View style={styles.container}>
            <Image
                style={styles.header_logoImg}
                source={require('@/assets/logos/logo-lizza-primária.png')}
                resizeMode="contain"
            />

            <View style={styles.mainContent}>
                <View style={styles.mainContent_timerArea}>
                    <Text style={styles.mainContent_timerArea_timerLabel}>
                        Tempo decorrido desde a ativação do pedido de ajuda:
                    </Text>

                    <ImageBackground
                        style={styles.mainContent_timerArea_timerOutline}
                        source={require('@/assets/vectors/timer-outline.png')} 
                        resizeMode="cover"
                    >
                        <Text style={styles.mainContent_timerArea_timer}>
                            00:15
                        </Text>
                    </ImageBackground>

                    <Link href={'/'} asChild>
                        <TouchableOpacity style={styles.mainContent_timerArea_confirmBtn}>
                            <Text style={styles.mainContent_timerArea_confirmBtnText}>
                                Estou bem
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}