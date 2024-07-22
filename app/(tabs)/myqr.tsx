import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather"
import Container from '@/components/ui/Container';
import images from "@/constants/images";
import { router } from 'expo-router';
import CustomInput from '@/components/ui/CustomInput';

const QRSection = () => {
    const [amount, setAmount] = useState("");

    const handleAmountChange = (amount: string) => {
        setAmount(amount)
    }

    return (
        <View className='w-full h-[75%] rounded-3xl border-[#b9babb] border mt-4'>
            <View className='flex-col gap-y-2'>
                <Image source={images.QRCode} resizeMode='contain' className='w-full h-[50%]' />
                <View>
                    <Text className='font-bbold text-regular capitalize text-center text-white '>Jugal Shrestha</Text>
                    <Text className='font-bregular text-medium capitalize text-center text-white '>19821093801231231</Text>
                    <Text className='font-bregular text-medium text-center text-[#ffffff7c] '>Mero Bhachat Khata</Text>
                </View>
            </View>

            <View className='px-4 py-2'>
                <Text className='font-bregular text-medium text-center text-white '>Enter the amount to receive <Text className=' text-gold '>(optional)</Text></Text>
                <CustomInput
                    input={amount}
                    handleInputChange={handleAmountChange}
                    keyBoardType='decimal-pad'
                    placeholder='For eg. 1000'
                />
            </View>

            <View className='flex-row'>
            </View>



        </View>
    )
}

const MyQR = () => {
    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <Container className='flex-1 items-center justify-center'>
                <QRSection />
                <View className="flex-col gap-y-2 pt-8">
                    <TouchableOpacity onPress={() => router.push("/(tabs)/scanner")}>
                        <LinearGradient
                            colors={['#D91A2A', '#0C4CA3']}
                            start={[1, 0.75]}
                            end={[0, 0.25]}
                            className="w-full rounded-3xl items-center flex-row justify-center p-2"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 3,
                            }}
                        >
                            <Text className='font-bbold text-large text-gold'>SEND</Text>
                            <Feather size={52} name="arrow-up-right" color="#ffffff" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default MyQR