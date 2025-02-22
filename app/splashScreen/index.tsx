import { SafeAreaView, View, Image,Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles"; // Certifique-se de que o arquivo styles existe
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function SplashScreen() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 5 : 100));
        }, 100);

        const timeout = setTimeout(() => {
            router.replace("/chatbot");
        }, 10000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#c5168c", "#0095d9"]}
                style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}
            />
            <AnimatedCircularProgress
                size={250}
                width={5}
                fill={progress}
                tintColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.2)"
                rotation={0} 
                style={{ alignItems: "center", justifyContent: "center", paddingBottom:"10%" }}
            >
                {() => (
                    <Image
                        source={require("./../../assets/images/lizzaLogoWhite.png")}
                        style={{ width: 100, height: 100, resizeMode: "contain" , marginLeft:10}}
                    />
                )}
            </AnimatedCircularProgress>
                <View style={styles.texts}>
                    <Text style={styles.textWelcome}>Seja bem-Vindo</Text>
                    <Text style={styles.textInfo}>Estamos te conectando </Text>
                </View>
                
        </View>
    );
}
