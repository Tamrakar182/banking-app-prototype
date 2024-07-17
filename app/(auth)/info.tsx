import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import Icon from "react-native-vector-icons/AntDesign"
import images from '@/constants/images'
import Container from '@/components/ui/Container'
import ServicesInfo from '@/components/ServicesInfo'
import { ServiceInfoType } from '@/types'

const services: ServiceInfoType[] = [
    {
        title: "Finance Tracking Features",
        info: "Helps to track money inflow and outflow"
    },
    {
        title: "Bill Splitting Feature",
        info: "Helps to split bills amongst group of people"
    },
    {
        title: "Digitization of Banking Services",
        info: "With the use of this app you can use every banking services we provide"
    },
    {
        title: "Easy Onboarding",
        info: "You can open a wallet account with your mobile number or simply open a new account through the app"
    },
    {
        title: "Earn Rewards",
        info: "Earn rewards in return for using our in-app services"
    }
]

const Info = () => {
    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <Container>
                <View className="py-4">
                    <Icon name="closecircleo" color="#fff" size={30} onPress={() => router.back()} />
                </View>
                <View className="items-center">
                    <Image source={images.Logo} className="w-[127px] h-[127px]" />
                </View>

                <View className="items-center justify-center px-8 py-8 flex-1">
                    <Text className="text-regular font-bbold text-gold">Our In-App Services</Text>
                    <ServicesInfo items={services} />
                </View>

                <View className="w-full flex-row justify-between items-center py-8">
                    <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
                    <CustomButton showArrow title="Skip" handlePress={() => router.push("/phone")} />
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default Info;
