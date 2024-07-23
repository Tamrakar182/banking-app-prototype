import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather"
import Container from '@/components/ui/Container';
import images from "@/constants/images";
import { router } from 'expo-router';
import CustomInput from '@/components/ui/CustomInput';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import useKeyboardVisible from '@/hooks/useKeyboard';

const QRSection = () => {
    const [amount, setAmount] = useState("");
    const isKeyboardVisible = useKeyboardVisible();

    const handleAmountChange = (amount: string) => {
        setAmount(amount)
    }

    return (
        <View
            className='flex-1 rounded-3xl border-[#b9babb] border my-4'
        >
            <Image source={images.QRCode} resizeMode='contain' className='w-full h-[45%]' />
            <View>
                <Text className='font-bbold text-regular capitalize text-center text-white '>Jugal Shrestha</Text>
                <Text className='font-bregular text-medium capitalize text-center text-white '>19821093801231231</Text>
                <Text className='font-bregular text-medium text-center text-[#ffffff7c] '>Mero Bhachat Khata</Text>
            </View>

            <View className='flex-1 px-4 my-4'>
                <Text className='font-bregular text-medium text-center mb-2 text-white '>Enter the amount to receive <Text className=' text-gold '>(optional)</Text></Text>
                <CustomInput
                    input={amount}
                    handleInputChange={handleAmountChange}
                    keyBoardType='decimal-pad'
                    placeholder='For eg. 1000'
                />
            </View>

            {!isKeyboardVisible && <View className='flex-row px-4 pb-4 justify-between fixed bottom-0'>
                <View className='flex-col items-center'>
                    <MaterialIcons name="account-circle" color="#ffffff71" size={40} />
                    <Text className='text-medium font-bregular text-[#ffffff71]'>Accounts</Text>
                </View>
                <View className='flex-col items-center'>
                    <Entypo name="share" color="#ffffff71" size={40} />
                    <Text className='text-medium font-bregular text-[#ffffff71]'>Share</Text>
                </View>
            </View>}
        </View>
    )
}

const MyQR = () => {
    const insets = useSafeAreaInsets();
    const isKeyboardVisible = useKeyboardVisible();

    return (
        <SafeAreaView className="h-full bg-backgroundBlue" style={{ paddingBottom: isKeyboardVisible ? 0 : 95 + insets.bottom }}>
            <Container className='flex-1 items-center justify-center'>
                <QRSection />
                <SendGradient />
            </Container>
        </SafeAreaView>
    )
}

const SendGradient = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
            ]}
            onPress={() => router.push("/(tabs)/scanner")}
        >
            <LinearGradient
                colors={['#444545', '#CFD1D2']}
                start={{ x: 1, y: 0.75 }}
                end={{ x: 0, y: 0.25 }}
                style={{ borderRadius: 15, padding: 1, marginBottom: 20 }}
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
                    colors={['#D91A2A', '#0C4CA3']}
                    start={[1, 0.75]}
                    end={[0, 0.25]}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        padding: 10
                    }}
                >
                    <Text className='font-bbold text-large text-gold'>SEND</Text>
                    <Feather size={52} name="arrow-up-right" color="#ffffff" />
                </LinearGradient>
            </LinearGradient >
        </Pressable>
    );
};

export default MyQR