import { Text, View } from "react-native";
import { DeviceMotion, Gyroscope, GyroscopeMeasurement } from "expo-sensors";
import { useState, useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";

export default function detectFall () {
    const [data, setData] = useState({
        accelerationIncludingGravity: { x: 0, y: 0, z: 0 }
    })

    const [gyroData, setGyroData] = useState({x: 0, y: 0, z: 0})

    const modalTest = useRef<Modalize>(null)

    console.log(
            'aceleração e orientação: ' +
            ' / ' + data.accelerationIncludingGravity.y.toFixed(2)
    )

    useEffect(() => {
        DeviceMotion.setUpdateInterval(1000);
        Gyroscope.setUpdateInterval(1000)
        
        const subscription = DeviceMotion.addListener((motionData) => {

            setData((prevData) => ({
                ...prevData,
                accelerationIncludingGravity: motionData.accelerationIncludingGravity ?? prevData.accelerationIncludingGravity
            }));
        });

        const gyroSubscription = Gyroscope.addListener(
            gyroscopeData => setGyroData(gyroscopeData)
        )

        if (data.accelerationIncludingGravity.x > 5) {
            modalTest.current?.open()
            DeviceMotion.removeAllListeners()
            return subscription.remove();
        }
    }, []);
    
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
                Valores:
            </Text>

            <Text>
                Aceleração incluindo a gravidade - Y: {data.accelerationIncludingGravity.y.toFixed(2)} / X: {data.accelerationIncludingGravity.x.toFixed(2)}
            </Text>

            <Text>
                Giroscópio - X: {gyroData.x.toFixed(2)} / Y: {gyroData.y.toFixed(2)} / Z: {gyroData.z.toFixed(2)}
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