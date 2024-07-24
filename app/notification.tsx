import * as Notifications from "expo-notifications"
import { Alert, Button } from "react-native";
import { View,Text } from "react-native";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
export default function Notification(){

    const handleCallNotification = async() =>{
        const {status} = await Notifications.getPermissionsAsync()
       
        if(status != 'granted'){
            Alert.alert('Voce nao deixou as notificacoes ativas')

            return
        }

        await Notifications.scheduleNotificationAsync({
            content:{
                title:'Hello world',
                body:'Notificacao Lizza',
            },
            trigger:null

        })
    }
    return(
        <View>
            <Text>ola</Text>
            <Text>ola</Text>
            <Text>ola</Text>
            <Text>ola</Text>
            <Text>ola</Text>
            <Button title="enviar notificacao" onPress={handleCallNotification}></Button>
        </View>
        
    )
}