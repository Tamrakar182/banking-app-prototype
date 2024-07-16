import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import clsx from 'clsx'

interface CustomButtonsProps {
    title: string;
    handlePress: VoidFunction;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles = "", textStyles = "", isLoading = false }: CustomButtonsProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={clsx("bg-darker-blue rounded-xl py-4 justify-center items-center", containerStyles, { isLoading: 'opacity-50' })}
        >
            <Text className={clsx("text-white font-bbold text-md text-center", textStyles)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton