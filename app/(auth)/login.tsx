import { View, Text, ImageBackground, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import images from '@/constants/images'
import Container from '@/components/ui/Container'
import IconedInput from '@/components/ui/IconedInput'
import { useState } from 'react'
import CheckBox from '@/components/ui/CheckBox'
import AntDesign from '@expo/vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcon from "@expo/vector-icons/MaterialIcons"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import clsx from 'clsx'

const ServicesIconRow = ({ className }: { className?: string }) => {
  return (
    <View className={clsx('flex-row items-start justify-around w-full', className)}>
      <View className="flex-col items-center space-y-2 text-center">
        <LinearGradient
          colors={['#0C4CA3', '#011B3E']}
          start={[0, 0.25]}
          end={[1, 0.75]}
          className="w-[60px] h-[60px] rounded-full items-center justify-center"
        >
          <MaterialIcon name="payments" size={30} color="#fff" />
        </LinearGradient>
        <Text className="text-medium font-bregular text-white">Payments</Text>
      </View>

      <View className="flex-col items-center space-y-2 text-center">
        <LinearGradient
          colors={['#0C4CA3', '#011B3E']}
          start={[0, 0.25]}
          end={[1, 0.75]}
          className="w-[60px] h-[60px] rounded-full items-center justify-center"
        >
          <FontAwesome6 name="map-location" size={30} color="#fff" />
        </LinearGradient>
        <Text className="text-medium font-bregular text-white text-center">ATM {"\n"}Maps</Text>
      </View>

      <View className="flex-col items-center space-y-2 text-center">
        <LinearGradient
          colors={['#0C4CA3', '#011B3E']}
          start={[0, 0.25]}
          end={[1, 0.75]}
          className="w-[60px] h-[60px] rounded-full items-center justify-center"
        >
          <FontAwesome6 name="headphones-simple" size={30} color="#fff" />
        </LinearGradient>
        <Text className="text-medium font-bregular text-white text-center">Customer {"\n"} Care</Text>
      </View>

      <View className="flex-col items-center space-y-2 text-center">
        <LinearGradient
          colors={['#0C4CA3', '#011B3E']}
          start={[0, 0.25]}
          end={[1, 0.75]}
          className="w-[60px] h-[60px] rounded-full items-center justify-center"
        >
          <FontAwesome6 name="clipboard-question" size={30} color="#fff" />
        </LinearGradient>
        <Text className="text-medium font-bregular text-white">FAQs</Text>
      </View>
    </View>
  )
}

const Login = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  const [input, setInput] = useState({
    phone: '',
    password: ''
  })

  const handlePhoneChange = (str: string) => {
    setInput({ ...input, phone: str })
  }

  const handlePwdChange = (str: string) => {
    setInput({ ...input, password: str })
  }
  const handleKeepLoggedInPress = () => {
    setKeepLoggedIn(!keepLoggedIn)
  }

  return (
    <ImageBackground source={images.Logo} blurRadius={10} resizeMode='contain'>
      <SafeAreaView className="h-full bg-backgroundBlue">
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <Container className='z-10 flex-1 justify-between'>
              <View className='flex-col gap-y-4 h-full justify-center'>
                <IconedInput
                  icon='mobile-phone'
                  keyboardType='decimal-pad'
                  handleInputChange={handlePhoneChange}
                  input={input.phone}
                  placeholder='Phone Number'
                  containerStyles='mb-4'
                />
                <IconedInput
                  icon='lock'
                  handleInputChange={handlePwdChange}
                  input={input.password}
                  placeholder='Password'
                  containerStyles='mb-4'
                />
                <View className='flex-row gap-x-2 items-center mb-8'>
                  <TouchableOpacity onPress={handleKeepLoggedInPress}>
                    <CheckBox checked={keepLoggedIn} />
                  </TouchableOpacity>
                  <Text className="text-medium font-bregular text-white">Remember Me</Text>
                </View>
                <CustomButton title="Login" containerStyles='w-full' handlePress={() => router.push('/(tabs)/home')} />
                <View className='flex-row gap-x-2 pt-4 my-4 items-center justify-center'>
                  <AntDesign name="questioncircleo" size={30} color="#fff" />
                  <Text className="text-white font-bbold text-md text-center">Unable to Login?</Text>
                </View>
                <View className="flex-col gap-y-4 mt-8">
                  <ServicesIconRow />
                </View>
              </View>

              <View className="flex-row w-full self-center justify-between items-center absolute bottom-0 py-8">
                <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
                <CustomButton showBackArrow title="Back" handlePress={() => router.back()} />
              </View>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Login;