import { View,TextInput } from "react-native";
import styles from './styles'

export default function Input(){

    type fieldInput = {
        placeHolder: string,
        label: string
        onChangeText: (text: string) => void  // Adiciona a função onChangeText como prop
      }

    return (
        <TextInput
            style={styles.inputs}
            placeholder="Digite algo..."
            placeholderTextColor="#999"
        />
    )
}