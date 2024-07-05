import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./emergencyActivation.style";
import { Link } from "expo-router";
import Timer from "@/components/Timer/Timer";

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
                        Tempo restante para a ativação do pedido de ajuda:
                    </Text>

                    <Timer />

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