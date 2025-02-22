import React, { useEffect,useState } from 'react';
import {Accelerometer,Gyroscope,AccelerometerMeasurement, GyroscopeMeasurement} from 'expo-sensors'
import { Subscription } from "expo-sensors/build/Pedometer";
import notification from './notification'

const DetectFall = async() =>{


    const GRAVITY_ACELERATION = 2

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



 if(magnitudeVectorAcelerometer() > GRAVITY_ACELERATION && magnitudeVectorGyroscope() > 1){
    console.log("queda detectada")
    notification.handleCallNotification()
    console.log(magnitudeVectorAcelerometer())
    
    
}
}

export default {
    DetectFall
}