import TopBar from '@/components/TopBar'
import CustomInput from '@/components/ui/CustomInput'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  const [searchText,setSearchText] = useState("");
  return (
    <SafeAreaView className="h-full bg-backgroundBlue">
      {/* topbar importing */}
      <TopBar/>

      {/* searchbar importing */}
      <View className='p-4'>
        <CustomInput input={searchText} handleInputChange={setSearchText} placeholder='🔍 Search here!' keyBoardType='default'/>
      </View>

    </SafeAreaView>
  )
}

export default Dashboard