import { View, ImageBackground, Text, Pressable, StyleSheet } from 'react-native';
import images from '@/constants/images';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { router } from 'expo-router';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useAppContext } from '@/context/AppContext';

const SendGradient = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0, width: '40%' }
            ]}
        >
            <LinearGradient
                colors={['#444545', '#CFD1D2']}
                start={{ x: 1, y: 0.75 }}
                end={{ x: 0, y: 0.25 }}
                style={{ borderRadius: 15, padding: 1, margin: 5, marginHorizontal: 10 }}
            >
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[1, 0]} end={[0, -0.1]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[0, 1]}
                    end={[0, 0]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#D91A2A', '#0C4CA3']}
                    start={[1, 0.75]}
                    end={[0, 0.25]}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        padding: 10
                    }}
                >
                    <Text className='font-bbold text-regular text-gold'>SEND</Text>
                    <Feather size={30} name="arrow-up-right" color="#ffffff" />
                </LinearGradient>
            </LinearGradient >
        </Pressable>
    );
};

const ReceiveGradient = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0, width: '40%' }
            ]}
        >
            <LinearGradient
                colors={['#444545', '#CFD1D2']}
                start={{ x: 1, y: 0.75 }}
                end={{ x: 0, y: 0.25 }}
                style={{ borderRadius: 15, padding: 1, margin: 5 }}
            >
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[1, 0]} end={[0, -0.1]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#ffffff42', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#ffffff42']}
                    start={[0, 1]}
                    end={[0, 0]}
                    style={{ ...StyleSheet.absoluteFillObject, borderRadius: 15, zIndex: 10 }}
                />
                <LinearGradient
                    colors={['#0C4CA3', '#011B3E']}
                    start={[0, 0.25]}
                    end={[1, 0.75]}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        padding: 10
                    }}
                >
                    <Text className='font-bbold text-regular text-gold'>RECEIVE</Text>
                    <Feather size={30} name="arrow-down-left" color="#ffffff" />
                </LinearGradient>
            </LinearGradient >
        </Pressable>
    );
};

const EyeButton = () => {
    const { showAmount, toggleShowAmount } = useAppContext();

    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
            ]}
            onPress={toggleShowAmount}
        >
            <LinearGradient
                colors={['#0C4CA3', '#011B3E']}
                start={[0, 0.25]}
                end={[1, 0.75]}
                className="w-[50px] h-[50px] absolute top-[-25px] rounded-full items-center justify-center"
                style={{
                    left: '50%',
                    marginLeft: -20
                }}
            >
                <FontAwesome5
                    name={showAmount ? "eye" : "eye-slash"}
                    size={25}
                    color="#ffffff"
                />
            </LinearGradient>
        </Pressable>
    )
}


const GradientCard = () => {
    const { showAmount } = useAppContext();

    return (
        <ImageBackground
            source={images.CardBG}
            className='h-[214px] flex-1 mt-6'
            resizeMode='cover'
            imageStyle={{ borderRadius: 20 }}
        >
            <EyeButton />
            <View className='px-4 pt-4'>
                <Text className='font-bbold text-white text-medium'>19128031093019233</Text>
                <Text className='font-bbold text-[#ffffff73] text-medium'>Bachat Khata</Text>
            </View>
            <View className='w-fit self-center py-4 flex-col'>
                <Text className='font-bbold text-profitGreen text-medium self-end p-0'>{showAmount ? '@3.012%' : '****'}</Text>
                <View className='flex-row items-baseline self-center p-0'>
                    <Text className='font-bbold text-[#ffffff73] text-medium'>NPR </Text><Text className='font-bbold text-white text-regular'>{showAmount ? '1,00,000' : '*******'}</Text><Text className='font-bbold text-[#ffffff] text-medium'>{showAmount ? ".12" : "***"}</Text>
                </View>
            </View>
            <View className='flex-row self-center bottom-0' style={{ gap: 15 }}>
                <SendGradient />
                <ReceiveGradient />
            </View>
        </ImageBackground>
    );
};

export default GradientCard;