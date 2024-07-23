import TopBar from '@/components/TopBar'
import CustomInput from '@/components/ui/CustomInput'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconedInput from '@/components/ui/IconedInput'
import GradientCard from '@/components/GradientCard'
import Container from '@/components/ui/Container'

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView className="h-full bg-backgroundBlue">
      <Container>
        <TopBar />

        <View className='py-4'>
          <IconedInput
            icon='search'
            input={searchText}
            handleInputChange={setSearchText}
            placeholder='Search here!'
            gradientStyles='rounded-[50px]'
          />
        </View>
        <GradientCard />
      </Container>
    </SafeAreaView>
  )
}

export default Dashboard