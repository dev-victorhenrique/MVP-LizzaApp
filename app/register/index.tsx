import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./styles";
import InputRegister from "@/components/regsiter/inputsRegister";
import { registerApi } from "@/services/register";
import { useRouter } from "expo-router";
import { Button, Snackbar } from 'react-native-paper';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [alergy, setAlergy] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [liveAlone, setLiveAlone] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');

  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1); 

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1); 
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

   const router = useRouter();


  async function onRegister(){
     const register = await registerApi(name,email,password,age,alergy,bloodType,liveAlone,address,cep)

        if(register !== null){
           router.replace('/login')
        } else{
            onToggleSnackBar()
        }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={require("../../assets/images/logo-lizza.png")} />
      </View>

      <View style={styles.header}>
        <Text style={styles.textHeader}>
          {step === 1 ? "Preencha seu cadastro com suas informações pessoais" :
                        "Agora, preencha seus dados de saúde"}
        </Text>
      </View>

      <View style={styles.inputs}>
        {step === 1 && (
          <>
            <InputRegister placeholder="Nome" onChangeText={(text) => setName(text)} value={name} />
            <InputRegister placeholder="Idade" onChangeText={(text) => setAge(text)} value={age}/>
            <InputRegister placeholder="Email" onChangeText={(text) => setEmail(text)} value={email}/>
            <InputRegister placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password}/>
            <InputRegister placeholder="address" onChangeText={(text) => setAddress(text)} value={address}/>
            <InputRegister placeholder="CEP" onChangeText={(text) => setCep(text)} value={cep}/>
          </>
        )}

        {step === 2 && (
          <>
            <InputRegister placeholder="Alergia" onChangeText={(text) => setAlergy(text)} value={alergy}/>
            <InputRegister placeholder="Tipo Sanguíneo" onChangeText={(text) => setBloodType(text)} value={bloodType}/>
            <InputRegister placeholder="Mora sozinho?" onChangeText={(text) => setLiveAlone(text)} value={liveAlone}/>
          </>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.Registerbutton}>
          {step === 1 ? (
            <TouchableOpacity style={styles.btn} onPress={nextStep}>
              <Text style={styles.btnText}>Continuar</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity style={styles.btn} onPress={prevStep}>
                <Text style={styles.btnText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => onRegister()}>
                <Text style={styles.btnText}>Finalizar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <Snackbar
                style={{backgroundColor:"#D32F2F"}}
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Close',
              
            
                }}>
                Erro ao cadastrar
            </Snackbar>
    </SafeAreaView>
  );
}
