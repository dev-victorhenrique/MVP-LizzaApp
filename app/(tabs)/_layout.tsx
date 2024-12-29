import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image,StyleSheet} from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor:"white",
          shadowColor: 'black', 
          shadowOffset: { width: 0, height: 4 }, 
          shadowOpacity: 0.9, 
          shadowRadius: 16, 
          borderTopWidth: 0, 
          height:100

        }
        
      }}>
     

  <Tabs.Screen
        name="settings/index"
        options={{
          title: '',
          tabBarIcon: ({ focused}) => <Image style={styles.icon } source={ focused ? require("./../../assets/images/settingsFocused.png") : require("./../../assets/images/settings.png")} />,
        }}
      />

  <Tabs.Screen
        name="home/index"
        options={{
          title: '',
          tabBarIcon: ({ focused}) => <Image style={styles.icon } source={ focused ? require("./../../assets/images/homeFocused.png") : require("./../../assets/images/home.png")} />,
        }}
      />

  <Tabs.Screen
        name="contact/index"
        options={{
          title: '',
          tabBarIcon: ({ focused}) => <Image style={styles.icon } source={ focused ? require("./../../assets/images/addFriendFocused.png") : require("./../../assets/images/addFriend.png")} />,
        }}
      />



     
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon:{
    width:40,
    height:40,
    marginTop:"100%"

  }
})

