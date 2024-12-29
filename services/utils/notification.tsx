import * as Notifications from "expo-notifications"
import { Alert, Button } from "react-native";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  


    const handleCallNotification = async() =>{
        const {status} = await Notifications.getPermissionsAsync()
       
        if(status != 'granted'){
            Alert.alert('Voce nao deixou as notificacoes ativas')

            return
        }

        await Notifications.scheduleNotificationAsync({
            content:{
                title:'Queda detectada',
                body:'Detectei uma queda',
            },
            trigger:null

        })
    }

export default {
    handleCallNotification
}
 

