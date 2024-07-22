import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather"
import Container from '@/components/ui/Container';
import { router } from 'expo-router';

const QRScanner = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [flash, setFlash] = useState<FlashMode>("off");
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View className='flex-1 justify-center'>
                <Text className='text-center pb-4'>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function toggleFlash() {
        setFlash(current => (current === 'off' ? 'on' : 'off'));
    }

    const handleScan = (result: any) => {
        console.log(result);
    }

    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <Container className='flex-1 items-center justify-center'>
                <CameraView
                    className='w-full h-[75%] rounded mt-2'
                    facing={facing}
                    flash={flash}
                    enableTorch={flash === "on" ? true : false}
                    onBarcodeScanned={(res) => handleScan(res.data)}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                >
                    <View className="flex-row justify-between p-4">
                        <TouchableOpacity onPress={toggleCameraFacing}>
                            <Ionicons name='image' size={50} color="#ffffff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleFlash}>
                            <Ionicons name={flash === "on" ? 'flash' : 'flash-off'} size={50} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </CameraView>
                <View className="flex-col gap-y-2 pt-4">
                    <Text className='font-bregular text-medium text-[#f2f2f2]'>Tap the button below to share your information 👇</Text>
                    <TouchableOpacity onPress={() => router.push("/(tabs)/myqr")}>
                        <LinearGradient
                            colors={['#0C4CA3', '#011B3E']}
                            start={[0, 0.25]}
                            end={[1, 0.75]}
                            className="w-full rounded-3xl items-center flex-row justify-center p-2"
                        >
                            <Text className='font-bbold text-large text-gold'>RECEIVE</Text>
                            <Feather size={52} name="arrow-down-left" color="#ffffff" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default QRScanner