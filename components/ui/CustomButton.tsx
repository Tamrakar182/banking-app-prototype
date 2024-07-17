import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from "react-native-vector-icons/AntDesign"

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
            className={clsx("rounded-[10px] justify-center items-center", containerStyles, { isLoading: 'opacity-50' })}
        >
            <LinearGradient
                colors={['#D91A2A', '#0C4CA3']}
                start={[1, 0.75]}
                end={[0, 0.25]}
                className="px-4 py-4 rounded-lg flex-row gap-x-2 items-center"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                }}
            >
                {showBackArrow && <Icon name="arrowleft" size={20} color="#fff" />}
                <Text className={clsx("text-white font-bbold text-md text-center", textStyles)}>
                    {title}
                </Text>
                {showArrow && <Icon name="arrowright" size={20} color="#fff" />}
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton