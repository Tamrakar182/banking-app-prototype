import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
    checked: boolean
}

const CheckBox = ({ checked }: Props) => {
    return (
        <LinearGradient
            colors={['#0C4CA3', '#011B3E']}
            start={[0, 0.25]}
            end={[1, 0.75]}
            className="w-[30px] h-[30px] rounded-full items-center justify-center"
        >
            {checked && <Icon name="check" size={20} color="#48b02c" />}
        </LinearGradient>
    )
}

export default CheckBox