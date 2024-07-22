import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from "@expo/vector-icons/AntDesign"

interface CustomButtonsProps {
    title: string;
    handlePress: VoidFunction;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
    showArrow?: boolean;
    showBackArrow?: boolean;
}

const CustomButton = ({ title, handlePress, showArrow = false, showBackArrow = false, containerStyles = "", textStyles = "", isLoading = false }: CustomButtonsProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={clsx("justify-center items-center", { isLoading: 'opacity-50' })}
        >
            <LinearGradient
                colors={['#D91A2A', '#0C4CA3']}
                start={[1, 0.75]}
                end={[0, 0.25]}
                className={clsx("px-4 py-4 rounded-lg flex-row justify-center items-center", containerStyles)}
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 3,
                }}
            >
                <View className='mr-2'>
                    {showBackArrow && <Icon name="arrowleft" size={20} color="#fff" />}
                </View>
                <Text className={clsx("text-white font-bbold text-md text-center", textStyles)}>
                    {title}
                </Text>
                <View className='ml-2'>
                    {showArrow && <Icon name="arrowright" size={20} color="#fff" />}
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton