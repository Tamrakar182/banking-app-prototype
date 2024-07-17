import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import images from "@/constants/images";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

interface Props {
    text: string;
    checked: string;
    handlePress: (str: string) => void;
}

const LanguageButton = ({ text, checked, handlePress }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => handlePress(text)}
            activeOpacity={0.7}
            className=" mt-4">
            <LinearGradient
                className="w-full py-4 rounded-xl flex-row items-center justify-between px-4"
                colors={['rgba(50, 100, 166, 0.2)', 'rgba(242, 242, 242, 0.2)']}
                start={[0.15, 0]}
                end={[0.85, 1]}>
                <View className="flex-row gap-x-4 items-center">
                    <Image source={text === "ENGLISH" ? images.EnglishFlag : images.NepaliFlag} className="w-10 h-10" />
                    <Text className="font-bbold text-regular text-white">{text}</Text>
                </View>
                <LinearGradient
                    colors={['#0C4CA3', '#011B3E']}
                    start={[0, 0.25]}
                    end={[1, 0.75]}
                    className="w-[30px] h-[30px] rounded-full items-center justify-center"
                >
                    {checked === text && <Icon name="check" size={20}  color="#48b02c" />}
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const LanguageRadio = () => {
    const [checked, setChecked] = useState<string>("ENGLISH");

    const handlePress = (str: string) => {
        setChecked(str);
    }

    return (
        <View className="w-full flex-1 flex-col gap-y-4">
            <LanguageButton handlePress={handlePress} text="ENGLISH" checked={checked} />
            <LanguageButton handlePress={handlePress} text="NEPALI" checked={checked} />
        </View>
    )
}

export default LanguageRadio