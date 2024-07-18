import { Text, View } from "react-native";
import {Accelerometer,Gyroscope,AccelerometerMeasurement, GyroscopeMeasurement} from 'expo-sensors'
import { useState, useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { Subscription } from "expo-sensors/build/Pedometer";


export default function detectFall(){
    const modalTest = useRef<Modalize>(null)

    const GRAVITY_ACELERATION = 9.8

   const [data,setData] = useState({
    acceleration:{x:0,y:0,z:0},
    rotation : {x:0,y:0,z:0}
   })

   const magnitudeVectorAcelerometer = () =>{
        let acceleration_x: number = data.acceleration.x
        let acceleration_y: number = data.acceleration.y
        let acceleration_z: number = data.acceleration.z

        return Math.sqrt(Math.pow(acceleration_x, 2) + Math.pow(acceleration_y, 2) + Math.pow(acceleration_z, 2))
   }

   const magnitudeVectorGyroscope = () =>{
        let rotation_x: number = data.rotation.x
        let rotation_y: number = data.rotation.y
        let rotation_z: number = data.rotation.z

        return Math.sqrt(Math.pow(rotation_x, 2) + Math.pow(rotation_y, 2) + Math.pow(rotation_z, 2))
   }

   useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    Gyroscope.setUpdateInterval(500)
    
    const accelerometerSubscription: Subscription = Accelerometer.addListener((motionData: AccelerometerMeasurement) => {
        setData((prevData) => ({
            ...prevData,
            acceleration: {
                x: motionData.x,
                y: motionData.y,
                z: motionData.z
            }
        }));
    });

    const gyroscopeSubscription: Subscription = Gyroscope.addListener((motionData: GyroscopeMeasurement) => {
        setData((prevData) => ({
            ...prevData,
            rotation: {
                x: motionData.x,
                y: motionData.y,
                z: motionData.z
            }
        }));
    });


}, []);

//console.log(`Aceleração resultante: ${magnitudeVectorAcelerometer().toFixed(2)}`)

    if(magnitudeVectorAcelerometer() > GRAVITY_ACELERATION && magnitudeVectorGyroscope() > 1){
        modalTest.current?.open()
    }

    



    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 25,
        }}>
            <Text>
                Testando Device Motion
            </Text>

            <Text>
                Aceleração resultante: {magnitudeVectorAcelerometer().toFixed(2)} / Queda detectada: {magnitudeVectorAcelerometer() - 9.8 > 0 ? 'Sim' : 'Não'}
            </Text>
        
            <Modalize 
                ref={modalTest}
                modalHeight={500}
                >
                    <View>
                        <Text>
                            Queda detectada
                        </Text>
                    </View>
            </Modalize>
        </View>
    )
}   