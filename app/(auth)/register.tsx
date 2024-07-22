import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import images from '@/constants/images'
import Container from '@/components/ui/Container'
import clsx from 'clsx'
import Icon from 'react-native-vector-icons/AntDesign'

const Register = () => {
    const handlePress = () => {
        router.push('/login')
    }

    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <ImageBackground className='w-full h-[144px] absolute z-0 top-[25%]' source={images.LoginBg} />
            <Container className='z-10 flex-1'>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View className='flex-1 justify-between'>
                        <View className="w-full flex-col justify-between py-8 ">
                            <Text className="text-regular font-bbold text-gold">Join the MBL Family!</Text>
                            <Text className="text-medium font-bregular text-white">One step closer to joining the MBL family!</Text>
                        </View>

                        <View className='flex-1 flex-col justify-end'>
                            <TouchableOpacity
                                onPress={handlePress}
                                activeOpacity={0.7}
                                className={clsx("justify-center px-4 py-4 rounded-lg items-center bg-gold mb-2")}
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 2,
                                    elevation: 3,
                                }}
                            >
                                <Text className={clsx("text-black font-bbold text-md text-center")}>
                                    <Text className='text-backgroundBlue'>Open a</Text> Wallet Account
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handlePress}
                                activeOpacity={0.7}
                                className={clsx("justify-center px-4 py-4 rounded-lg items-center bg-gold mb-2")}
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 2,
                                    elevation: 3,
                                }}
                            >
                                <Text className={clsx("text-black font-bbold text-md text-center")}>
                                    <Text className='text-backgroundBlue'>Open a new</Text> Bank Account
                                </Text>
                            </TouchableOpacity>

                            <CustomButton title="Activate my Account" containerStyles='w-full mb-8' handlePress={handlePress} />

                            <View className='flex-row gap-x-2 items-center justify-center'>
                                <Icon name="questioncircleo" size={30} color="#fff" />
                                <Text className="text-white font-bbold text-md text-center">Click Here if you need help in choosing</Text>
                            </View>

                        </View>

                        <View className="flex-row justify-between items-center py-8">
                            <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
                            <CustomButton showBackArrow title="Back" handlePress={() => router.back()} />
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </SafeAreaView>
    )
}

export default Register;
