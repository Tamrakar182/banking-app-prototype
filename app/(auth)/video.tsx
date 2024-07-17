import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import Container from '@/components/ui/Container'

const Video = () => {
  return (
    <SafeAreaView className="h-full bg-backgroundBlue">
      <Container>
        <View className="flex-1 flex-col items-center justify-center py-8 ">
          <Text className="text-medium font-bregular text-white">Some Video</Text>
        </View>
        <View className="w-full py-8 items-center flex-row justify-center">
          <Text className="text-white font-bregular text-normal">
            Click{'  '}
          </Text>
          <TouchableOpacity className="p-2 bg-white rounded-xl border-black" onPress={() => router.push("/info")}>
            <Text className='uppercase text-black font-bbold text-regular'>here</Text>
          </TouchableOpacity>
          <Text className="text-white font-bregular text-normal">
            {'  '}to see all the added features
          </Text>
        </View>
        <View className="w-full flex-row justify-between items-center py-8">
          <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
          <CustomButton showArrow title="Skip" handlePress={() => router.push("/phone")} />
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default Video;
