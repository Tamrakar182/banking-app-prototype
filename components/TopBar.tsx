import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const TopBar = () => {
  return (
    <View className='w-full flex-row py-4 items-center justify-between'>
      <View>
        <EvilIcons color="white" name="user" size={50} />
      </View>
      <LinearGradient colors={['#D91A2A', '#0C4CA3']} className='w-[50px] h-[50px] overflow-hidden items-center justify-center rounded-full border-2 border-gray-500' start={[1, 0.75]} end={[0, 0.25]}>
        <LinearGradient colors={['white', 'transparent', 'transparent', 'white']} start={[1, 0.75]} end={[0, 0.25]} className="w-full h-full absolute z-10"></LinearGradient>
        <EvilIcons color="white" name="bell" size={47} />
      </LinearGradient>
    </View>
  )
}

const style = StyleSheet.create({})

export default TopBar