import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Configurações</Text>
            </View>

            <View style={styles.data}>
                <View style={styles.dataProfile}>
                    <Image
                        style={styles.profileImage}
                        source={require('./../../../assets/images/iconProfile.png')}
                    />
                    <Text>Seu perfil</Text>
                </View>

                {["Nome Completo", "Idade", "CEP", "Número e complemento", "Alergias", "Doença Crônica", "Moro sozinho"].map((label, index) => (
                    <View key={index} style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>{label}</Text>
                            <Text style={styles.value}>xxxxxxx</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>
                ))}
            </View>

            <View style={styles.footer}>
                <Image style={{width:140,height:50 }} source={require('./../../../assets/images/logo-lizza.png')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header: {
        alignItems: "center",
        height: 80,
        justifyContent: "center",
    },

    headerText: {
        fontSize: 32,
    },

    data: {
        flex: 1,
        marginHorizontal: 20,
    },

    dataProfile: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    profileImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },

    dataInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start", // Ajuste aqui para alinhar à esquerda
        marginBottom: 15, // Aproxima os itens
    },

    textContainer: {
        flex: 1,
    },

    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5, // Aproxima o texto do valor
    },

    value: {
        fontSize: 14,
        color: "#555",
    },

    editIcon: {
        width: 20,
        height: 20,
    },

    footer:{
        width:"100%",
        alignItems:"center",
        height:100
    }
});
