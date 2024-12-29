import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,Dimensions } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";
import BottomSheet,{BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useCallback, useMemo, useRef,useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import { CartesianChart, Line,useChartPressState } from "victory-native";
import { Link } from "expo-router";
import detectFall from "@/services/utils/detecFallSystem";

 
export default function Home(){

   detectFall.DetectFall()

    const DATA = Array.from({ length: 31 }, (_, i) => ({
        day: i,
        lowTmp: 20 + 10 * Math.random(),
        highTmp: 40 + 30 * Math.random(),
      }));

    const [fontsLoaded] = useFonts({
        'Carnac-Medium': require('../../../assets/fonts/Carnac W03 Medium.ttf'), // Caminho para a fonte
      });

    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const snapPoints = useMemo(() => ['15%', '15%', '15%'], []);


    return(
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.header}> //header
                <Image style={styles.logo} source={(require('./../../../assets/images/logo-lizza.png'))}/>
                <View style={styles.hr}></View>
                <Text>Lizza.com.br</Text>
            </View>

            <View style={styles.title}> //title
                <View>
                    <Text style={styles.titleText}>Seja bem vindo</Text>
                </View>

                <View >
                    <Text style={styles.titleName}>[Nome]</Text>
                </View>
            </View>

            <Link href={"/timer"}>
            <View style={styles.emergencyButton}> //emergencyButton    
                <TouchableOpacity>
                    <Image style={styles.image} source={require('./../../../assets/images/emergencyButton.png')}/>
                </TouchableOpacity>    
            </View>
            </Link>
        

            <View style={styles.status}> //status
                <View style={styles.statusDivision}>
                    <Text style={styles.statusText}>Status do app</Text>
                    <MaterialIcons name="toggle-on" size={60} color="#90ee90" style={styles.icon}/>
                </View>
            </View>


            <BottomSheet
                    ref={bottomSheetRef}
                    onChange={handleSheetChanges}
                    snapPoints={snapPoints} 
                    style={styles.bottomSheet}
                >
                <BottomSheetView  style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetViewTitle}>Seus Hábitos</Text>                 

                    <View style={styles.period}> // Period
                        <TouchableOpacity style={styles.periodType}>
                            <Text style={styles.periodTypeText}>Dia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.periodType}>
                            <Text  style={styles.periodTypeText}>semana</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.periodType}>
                            <Text  style={styles.periodTypeText}>Mes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoHabitsUser}> //infoHabitsUser
                        <View style={styles.habitUser}> 
                            <View style={styles.habitUserHour}>
                                <Text style={styles.habitUserHourText}>XX</Text>
                            </View>

                            <View style={styles.habitUserName}>
                                <Text style={styles.habitUserNameText}>Horas de Sono</Text>
                            </View>
                        </View>

                        <View style={styles.habitUser}>
                            <View style={styles.habitUserHour}>
                                <Text style={styles.habitUserHourText}>XX</Text>
                            </View>

                            <View style={styles.habitUserName}>
                                <Text style={styles.habitUserNameText}>Horas em movimento</Text>
                            </View>
                        </View>

                        <View style={styles.habitUser}>
                            <View style={styles.habitUserHour}>
                                <Text style={styles.habitUserHourText}>XX</Text>
                            </View>

                            <View style={styles.habitUserName}>
                                <Text style={styles.habitUserNameText}>Horas no celular</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.chartContainer}>
                        <CartesianChart
                            data={DATA} // 👈 specify your data
                            xKey="day" // 👈 specify data key for x-axis
                            yKeys={["lowTmp", "highTmp"]} // 👈 specify data keys used for y-axis
                            axisOptions={{
                                tickCount:30,
                                labelOffset:{x:3, y:2},
                                labelPosition:"inset"
                            }}
                            
                        >
                            {/* 👇 render function exposes various data, such as points. */}
                            {({ points }) => (
                            // 👇 and we'll use the Line component to render a line path.
                            <Line points={points.highTmp} color="red" strokeWidth={4} />
                            
                            )}
                        </CartesianChart>
                    </View>
                </BottomSheetView>
            </BottomSheet>



        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"

    },

    header:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        padding:20
    },



    title:{
        display:"flex",
        alignItems:"center",
        gap:10,
        marginVertical:25

    },

    emergencyButton:{
        width:260,
        height:260,
      
        
    },

    image:{
        width:"100%",
        height:"100%"
    },

    logo:{
        width:104,
        height:36
    },

    hr:{
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal:10
    },

    titleText:{
        fontSize:32,
        fontFamily:"Carnac-Medium",
        color:"#434b4c",
    },

    titleName:{
        fontSize:28,
        fontFamily:"Carnac-Medium",
        color:"#434b4c",
    },

    status:{
        marginTop:10,
        marginBottom:"25%"
    },

    statusDivision:{
        display:"flex",
        flexDirection:"column",
        gap:10
    },

    statusText:{
       fontSize:16 ,
       textAlign:"center",
        fontFamily:"Carnac-Medium",
        color:"#434b4c",
    },

    icon:{
        textAlign:"center",
    },


    bottomSheetContent:{
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },

    bottomSheet:{
      backgroundColor:"#fff",
      shadowColor:"#000",
      borderRadius:20,
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 1, // Opacidade da sombra
      shadowRadius: 6, // Suavidade da borda da sombra
      elevation: 8, // Necessário para sombra no Android
      
    },

    bottomSheetViewTitle:{
        textAlign:"center",
        fontSize:32,
        fontFamily:"Carnac-Medium",
        color:"#434b4c",


    },

    period:{
        display:"flex",
        flexDirection:"row",
        gap:30,
        marginTop:20
        
    
    },

    periodType:{
        height:20,
        shadowColor:"#000",
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1, 
        shadowRadius: 6, 
        elevation: 8, 
        backgroundColor:"#fff",
        borderRadius:10,
        width:72,
    },

    periodTypeText:{
        textAlign:"center",
    },

    infoHabitsUser:{
        display:"flex",
        flexDirection:"row",
        marginTop:20,
       
    },

    habitUser:{
        display:"flex",
        flexDirection:"column",
        gap:10
    },

    habitUserHour:{
        width:100,
        height:50,
        shadowColor:"#000",
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1, 
        shadowRadius: 6, 
        elevation: 8, 
        backgroundColor:"#fff",
        borderRadius:10,
        margin:10
        
    },

    habitUserName:{
        width:120,
        alignItems:"center",
    },

    habitUserHourText:{
        textAlign:"center",
        top:"20%",
        fontSize:24
    },

    habitUserNameText:{
        textAlign:"center"
    },

    chartContainer:{
        marginTop:20,
        width:"100%",
        height:360
    }





    
})