import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {jwtDecode} from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect,useState } from 'react';
import { useRouter } from "expo-router";

export default function Settings() {

    const [userData, setUserData] = useState<any>(null)
     const router = useRouter();

    async function getDataUser(){
         const token = await AsyncStorage.getItem('token')
         const tokenDecoded = jwtDecode(token as string)
 
         setUserData(tokenDecoded);
         return tokenDecoded
        
     }

     function logout(){
        AsyncStorage.removeItem('token')
        router.replace('/login')
     }
 
     useEffect(() => {
      getDataUser()
     },[])


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
                    <TouchableOpacity onPress={() =>{logout()}}>
                        <Text style={{marginLeft:200, fontSize:20, color:"red"}}>Sair</Text>
                    </TouchableOpacity>
                    
                </View>

              
                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Nome</Text>
                            <Text style={styles.value}>{userData ? userData.name : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Email</Text>
                            <Text style={styles.value}>{userData ? userData.email : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Idade</Text>
                            <Text style={styles.value}>{userData ? userData.age : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Alergia</Text>
                            <Text style={styles.value}>{userData ? userData.alergie : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Tipo Sanguíneo</Text>
                            <Text style={styles.value}>{userData ? userData.bloodType : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Cep</Text>
                            <Text style={styles.value}>{userData ? userData.cep : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    <View  style={styles.dataInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.label}>Complemento</Text>
                            <Text style={styles.value}>{userData ? userData.address : 'Carregando...'}</Text>
                        </View>
                        <Image
                            style={styles.editIcon}
                            source={require('./../../../assets/images/edit.png')}
                        />
                    </View>

                    
            
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
