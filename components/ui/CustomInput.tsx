import { View, TextInput, KeyboardTypeOptions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    input: string;
    handleInputChange: (str: string) => void
    placeholder: string
    keyBoardType: KeyboardTypeOptions
}

const CustomInput = ({ input, handleInputChange, placeholder, keyBoardType }: Props) => {
    return (
        <View className="w-full h-16">
            <LinearGradient
                className="w-full py-4 rounded-xl flex-row items-center justify-between px-4"
                colors={['rgba(50, 100, 166, 0.2)', 'rgba(242, 242, 242, 0.2)']}
                start={[0.15, 0]}
                end={[0.85, 1]}>
                <TextInput
                    className="flex-1 mt-0.5 font-pregular text-base text-gold"
                    value={input}
                    placeholder={placeholder}
                    placeholderTextColor="#cdcde0"
                    keyboardType={keyBoardType}
                    onChangeText={(e) => handleInputChange(e)}
                />
            </LinearGradient>
        </View>
    )
}

export default CustomInput