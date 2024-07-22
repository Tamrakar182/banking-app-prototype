import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <LinearGradient
            colors={['#3264a6', '#f2f2f22a']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
                flexDirection: 'row',
                height: 75,
                marginHorizontal: 24,
                borderRadius: 50,
                marginBottom: 10,
            }}
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {options.tabBarIcon({
                            color: isFocused ? '#00ff00' : '#ffffff',
                            focused: isFocused
                        })}
                    </TouchableOpacity>
                );
            })}
        </LinearGradient>
    );
};

const TabsLayout = () => {
    return (
        <View className='flex-1 bg-backgroundBlue'>
            <Tabs
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <AntDesign
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="payments"
                    options={{
                        title: "Payments",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Foundation
                                name="dollar-bill"
                                size={30}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="scanner"
                    options={{
                        title: "QR Scanner",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                <LinearGradient
                                    colors={['#0C4CA3', '#011B3E']}
                                    start={[0, 0.25]}
                                    end={[1, 0.75]}
                                    className="w-[90px] h-[90px] rounded-full items-center justify-center"
                                >

                                    <Ionicons
                                        name="scan"
                                        size={50}
                                        color={color}
                                    />
                                </LinearGradient>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name="chat"
                    options={{
                        title: "Chat",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Entypo
                                name="chat"
                                size={30}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="more"
                    options={{
                        title: "More",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Feather
                                name="more-horizontal"
                                size={30}
                                color={color}
                            />
                        )
                    }}
                />
            </Tabs>
        </View>
    )
}

export default TabsLayout