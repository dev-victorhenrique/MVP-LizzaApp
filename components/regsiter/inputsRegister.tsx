import { TextInput } from "react-native"
import styles from "./regsiter.styles"

type FieldInputProps = {
    placeholder:string,
    value:string,
    onChangeText:(text:string) => void
  }

export default function InputRegister({placeholder,value,onChangeText }: FieldInputProps){
    return (
        <TextInput
            style={styles.inputs}
            placeholder ={placeholder}
            placeholderTextColor="#999"
            onChangeText={onChangeText}

        />
    )
}