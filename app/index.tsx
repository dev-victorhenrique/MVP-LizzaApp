import { Text, View } from "react-native";
import { DeviceMotion, DeviceMotionMeasurement,  } from "expo-sensors";
import { useState, useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { Subscription } from "expo-sensors/build/Pedometer";

export default function detectFall () {
    const modalTest = useRef<Modalize>(null)
    
    const [data, setData] = useState({
        acceleration: { x: 0, y: 0, z: 0 }
    })

    const dataCalculation = () => {
        let acceleration_x: number = data.acceleration.x
        let acceleration_y: number = data.acceleration.y
        let acceleration_z: number = data.acceleration.z

        return Math.sqrt(Math.pow(acceleration_x, 2) + Math.pow(acceleration_y, 2) + Math.pow(acceleration_z, 2))
    }

    useEffect(() => {
        DeviceMotion.setUpdateInterval(500);
        
        const subscription: Subscription = DeviceMotion.addListener((motionData: DeviceMotionMeasurement) => {
            setData((prevData) => ({
                ...prevData,
                acceleration: motionData.acceleration ?? prevData.acceleration
            }));
        });
    }, []);

    console.log(`Aceleração resultante: ${dataCalculation().toFixed(2)}`)

    if (dataCalculation() > DeviceMotion.Gravity) {
        modalTest.current?.open()
    }
    
    return(
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
                Aceleração resultante: {dataCalculation().toFixed(2)} / Queda detectada: {dataCalculation() - DeviceMotion.Gravity > 0 ? 'Sim' : 'Não'}
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