import { View,TextInput } from "react-native";
import styles from './styles'

type FieldInputProps = {
    value: string
    onChangeText: (text: string) => void  
  }

export default function Input({value, onChangeText }: FieldInputProps){

    
    return (
        <TextInput
            style={styles.inputs}
            placeholder ="Digite algo..."
            placeholderTextColor="#999"
            onChangeText={onChangeText}
            value={value}
        />
    )
}