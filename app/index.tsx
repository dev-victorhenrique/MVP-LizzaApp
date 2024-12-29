import { View,SafeAreaView ,Text,StyleSheet} from "react-native"
import { Link, Redirect } from "expo-router"

export default function SplashScreen(){

    return (
      <Redirect href={"/splashScreen"} />
    )
}


