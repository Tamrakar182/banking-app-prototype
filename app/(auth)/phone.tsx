import { View, Text, TouchableOpacity, Image, ImageBackground, Alert, KeyboardAvoidingView, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import images from '@/constants/images'
import Container from '@/components/ui/Container'
import CustomInput from '@/components/ui/CustomInput'
import { useState } from 'react'
import Icon from "react-native-vector-icons/Entypo"
import { LinearGradient } from 'expo-linear-gradient'
import clsx from 'clsx'

const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleInputChange = (str: string) => {
        setPhoneNumber(str);
    }

    const handleNextPress = () => {
        if (phoneNumber === "") {
            Alert.alert("Error", "Please enter your phone number before proceeding.")
            return;
        }
        if (phoneNumber.length !== 10) {
            Alert.alert("Error", "Please enter a valid phone number")
            return;
        }
        router.push("/register");
    }

    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <ImageBackground className='w-full h-[144px] absolute z-0 top-[50%]' source={images.LoginBg} />
            <Container className='z-10'>
                <View className="w-full flex-col justify-between py-8 ">
                    <Text className="text-regular font-bbold text-gold">Let's begin!</Text>
                    <Text className="text-medium font-bregular text-white">Before you use the app let's know each other!</Text>
                </View>

                <View className='flex-1'>
                    <Text className='text-white font-bregular text-medium pb-2'>Enter your phone Number</Text>
                    <CustomInput
                        keyBoardType='decimal-pad'
                        input={phoneNumber}
                        handleInputChange={handleInputChange}
                        placeholder='eg. 98000000'
                    />
                    <TouchableOpacity
                        onPress={handleNextPress}
                        activeOpacity={0.7}
                        className={clsx("rounded-full mt-8 justify-center items-center")}
                    >
                        <LinearGradient
                            colors={['#D91A2A', '#0C4CA3']}
                            start={[1, 0.75]}
                            end={[0, 0.25]}
                            className="px-4 py-4 rounded-full items-center"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 5,
                            }}
                        >
                            <Icon name="chevron-right" size={48} color="#fff" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View className="w-full flex-row justify-between items-center py-8">
                    <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
                    <CustomButton showBackArrow title="Back" handlePress={() => router.back()} />
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default Phone;
