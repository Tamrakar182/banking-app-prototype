import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather"
import Container from '@/components/ui/Container';
import { router } from 'expo-router';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const QRScanner = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [flash, setFlash] = useState<FlashMode>("off");
    const [permission, requestPermission] = useCameraPermissions();
    const insets = useSafeAreaInsets();

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
        <SafeAreaView className="h-full bg-backgroundBlue" style={{ paddingBottom: 95 + insets.bottom }}>
            <Container className='flex-1 items-center justify-center'>
                <CameraView
                    className='flex-1 rounded-full overflow-hidden my-4'
                    facing={facing}
                    flash={flash}
                    enableTorch={flash === "on" ? true : false}
                    onBarcodeScanned={(res) => handleScan(res.data)}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                >
                    <View className="flex-row justify-between p-4">
                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0 }
                            ]}
                            onPress={toggleCameraFacing}
                        >
                            <Ionicons name='image' size={50} color="#ffffff" />
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0 }
                            ]}
                            onPress={toggleFlash}
                        >
                            <Ionicons name={flash === "on" ? 'flash' : 'flash-off'} size={50} color="#ffffff" />
                        </Pressable>
                    </View>
                </CameraView>
                <View className="flex-col pb-4 fixed bottom-0 self-center">
                    <Text className='font-bregular text-medium text-[#f2f2f2] pb-4'>Tap the button below to share your information 👇</Text>
                    <ReceiveGradient />
                </View>
            </Container>
        </SafeAreaView>
    )
}

const ReceiveGradient = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
            ]}
            onPress={() => router.push("/(tabs)/myqr")}
        >
            <LinearGradient
                colors={['#444545', '#CFD1D2']}
                start={{ x: 1, y: 0.75 }}
                end={{ x: 0, y: 0.25 }}
                style={{ borderRadius: 15, padding: 1 }}
            >
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[1, 0]} end={[0, -0.1]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[0, 1]}
                    end={[0, 0]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#0C4CA3', '#011B3E']}
                    start={[0, 0.25]}
                    end={[1, 0.75]}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        padding: 10
                    }}
                >
                    <Text className='font-bbold text-large text-gold'>RECEIVE</Text>
                    <Feather size={52} name="arrow-down-left" color="#ffffff" />
                </LinearGradient>
            </LinearGradient >
        </Pressable>
    );
};

export default QRScanner