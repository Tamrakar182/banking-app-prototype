import { View, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import clsx from 'clsx';

interface Props {
    icon: string
    input: string;
    handleInputChange: (str: string) => void
    placeholder: string
    containerStyles?: string
    keyboardType?: KeyboardTypeOptions
}

const IconedInput = ({ icon, containerStyles, input, handleInputChange, keyboardType="default", placeholder }: Props) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={clsx("w-full h-16", containerStyles)}>
            <LinearGradient
                className="w-full py-4 rounded-xl flex-row items-center justify-between px-4"
                colors={['rgba(50, 100, 166, 0.2)', 'rgba(242, 242, 242, 0.2)']}
                start={[0.15, 0]}
                end={[0.85, 1]}>
                <View className='mr-2'>
                    <Icon
                        name={icon as any}
                        size={24}
                        color="#fff"
                    />
                </View>
                <TextInput
                    className="flex-1 mt-0.5 font-pregular text-base text-gold"
                    value={input}
                    placeholder={placeholder}
                    placeholderTextColor="#cdcde0"
                    keyboardType={keyboardType}
                    onChangeText={(e) => handleInputChange(e)}
                    secureTextEntry={placeholder === "Password" && !showPassword}
                />
                {placeholder === "Password" && (
                    <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                        <Entypo name={!showPassword ? "eye" : "eye-with-line"} size={24} color="#fff" />
                    </TouchableOpacity>
                )}
            </LinearGradient>
        </View>
    )
}

export default IconedInput