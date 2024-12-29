import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import Dropdown from "@/components/dropdown";
import Input from "@/components/regsiter/inputs";
import Icon from "react-native-vector-icons/MaterialIcons"; // Ícone

const { width } = Dimensions.get("window");

export default function Contact() {
  const [slideVisible, setSlideVisible] = useState(false); // Controle da tela deslizante
  const [selectedRelation, setSelectedRelation] = useState(null); // Relação selecionada
  const slideAnim = useRef(new Animated.Value(width)).current; // Posição inicial da tela fora do viewport

  const items = [
    {
      label: "Nome Completo",
      customInfo: "xxxxxxxxxxx",
    },
    {
      label: "Telefone",
      customInfo: "xxxxxxxxxxx",
    },
    {
      label: "Relação",
      customInfo: "",
    },
  ];

  const openSlide = () => {
    setSlideVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSlide = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSlideVisible(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Contatos salvos</Text>
      </View>

      {/* Logotipo */}
      <View style={styles.logo}>
        <Image
          style={{ width: 70, height: 60 }}
          source={require("./../../../assets/images/addFriendFocused.png")}
        />
      </View>

      {/* Dropdown Informativo */}
      <ScrollView style={styles.main}>
        <Dropdown label="Contato 1" items={items} />
        <Dropdown label="Contato 2" items={items} />
        <Dropdown label="Contato 3" items={items} />

        {/* Botão para abrir a tela deslizante */}
        <TouchableOpacity style={styles.addContact} onPress={openSlide}>
          <Text style={styles.addContactText}>Adicionar Contato</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Tela deslizante */}
      {slideVisible && (
        <Animated.View
          style={[
            styles.slideInScreen,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={styles.slideContent}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Novo Contato</Text>
            </View>

            <View>
              {/* Nome Completo */}
              <View style={styles.inputGroup}>
                <Text>Nome Completo</Text>
                <Input />
              </View>

              {/* Telefone */}
              <View style={styles.inputGroup}>
                <Text>Telefone</Text>
                <Input />
              </View>

              {/* Relação */}
              <View style={styles.inputGroup}>
                <Text>Relação</Text>
                <View style={styles.radioGroup}>
                  {["Familiar", "Parceiro(a)", "Filho(a)", "Amigo(a)", "Vizinho(a)"].map((relation, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.radioButton}
                      onPress={() => setSelectedRelation(relation)}
                    >
                      <View
                        style={[
                          styles.radioCircle,
                          selectedRelation === relation && styles.radioSelected,
                        ]}
                      />
                      <Text style={styles.radioLabel}>{relation}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* Botão para fechar a tela */}
            <TouchableOpacity style={styles.closeButton} onPress={closeSlide}>
             <Icon name={"close"} size={40} color={"#2F2C2C"}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addContact} onPress={openSlide}>
              <Text style={styles.addContactText}>Salvar Contato</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
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
    height: 100,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 32,
  },

  logo: {
    marginLeft: "10%",
    marginBottom: 20,
  },

  main: {
    flex: 1,
    marginLeft: "10%",
    marginTop: 20,
  },

  addContact: {
    width: 190,
    padding: 10,
    backgroundColor: "#0095d9",
    alignSelf: "center",
    marginTop: 20,
    marginLeft:"35%"
  },

  addContactText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },

  slideInScreen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#f9f9f9",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  slideContent: {
    flex: 1,
    padding: 20,
    top:20
  },

  inputGroup: {
    marginBottom: 20,
  },

  radioGroup: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10,
    gap:10
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2F2C2C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2F2C2C",
  },

  radioLabel: {
    fontSize: 16,
    color: "#333",
  },

  closeButton: {
    margin:20,
    marginTop:40,
    padding:10,
    alignSelf: "flex-start",
    position:"absolute"
  },

  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
