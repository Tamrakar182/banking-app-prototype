import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import images from '@/constants/images';
import useKeyboardVisible from '@/hooks/useKeyboard';

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    const isKeyboardVisible = useKeyboardVisible();

    const visibleRoutes = state.routes.filter((route: any) =>
        descriptors[route.key].options.tabBarIcon !== undefined
    );

    return (
        <View>
            <LinearGradient
                colors={['#3264a6', '#f2f2f22a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    display: isKeyboardVisible ? "none" : "flex",
                    flexDirection: 'row',
                    height: 75,
                    borderRadius: 50,
                    marginBottom: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: -10, height: 10 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 3,
                    justifyContent: "center",
                    paddingHorizontal: 4,
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                    width: '95%',
                    alignSelf: 'center'
                }}
            >
                {visibleRoutes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === state.routes.indexOf(route);

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
                        <Pressable
                            key={route.key}
                            onPress={onPress}
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0, flex: 1, alignItems: 'center', justifyContent: 'center', }

                            ]}
                        >
                            {options.tabBarIcon({
                                color: isFocused ? '#00ff00' : '#ffffff',
                                focused: isFocused
                            })}
                        </Pressable>
                    );
                })}
            </LinearGradient>
        </View>
    );
};
const TabsLayout = () => {

    return (
        <View className='flex-1 bg-transparent'>
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
                            <Image
                                source={images.HomeIcon}
                                className='w-[30px] h-[30px]'
                                resizeMode='contain'
                                style={{
                                    tintColor: color
                                }}
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
                            <Image
                                source={images.CashIcon}
                                className='w-[30px] h-[30px]'
                                resizeMode='contain'
                                style={{
                                    tintColor: color,
                                    marginRight: 10
                                }}
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
                            <View className='self-center'>
                                <LinearGradient
                                    colors={['#0C4CA3', '#011B3E']}
                                    start={[0, 0.25]}
                                    end={[1, 0.75]}
                                    className="w-[90px] h-[90px] rounded-full items-center justify-center"
                                >

                                    <Ionicons
                                        name="scan"
                                        size={60}
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
                            <Ionicons
                                name="chatbox"
                                size={30}
                                style={{ marginLeft: 10 }}
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
                <Tabs.Screen
                    name="myqr"
                    options={{
                        href: null,
                        tabBarHideOnKeyboard: true,
                    }}
                />
            </Tabs>
        </View>
    )
}

export default TabsLayout