import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"; // Ícone
import styles from "./styles";

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const [selectedRelacao, setSelectedRelacao] = useState(null); // Estado para o botão de rádio

  const RadioButton = ({ value, label }) => (
    <TouchableOpacity
      onPress={() => setSelectedRelacao(value)}
      style={styles.radioOption}
    >
      <Text style={styles.radioText}>{label}</Text>
      <View
        style={[
          styles.radioCircle,
          selectedRelacao === value && styles.radioCircleSelected,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.dropdownContainer}>
      {/* Cabeçalho do dropdown */}
      <TouchableOpacity style={styles.dropdown} onPress={() => setOpen(!open)}>
        <Text style={styles.dropdownText}>{label}</Text>
        <Icon
          name={open ? "expand-less" : "expand-more"}
          size={24}
          color="#333"
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      {/* Conteúdo do dropdown */}
      {open && (
        <View style={styles.dropdownContent}>
          {items.map((item, index) => (
            <View key={index} style={styles.infoItem}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              {item.label === "Relacao" ? (
                <View style={styles.radioGroup}>
                  {["Familiar", "Parceiro", "Filho", "Amigo", "Vizinho"].map(
                    (relation) => (
                      <RadioButton
                        key={relation}
                        value={relation}
                        label={relation}
                      />
                    )
                  )}
                </View>
              ) : (
                <Text style={styles.infoDetail}>{item.customInfo}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}