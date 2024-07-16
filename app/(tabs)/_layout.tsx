// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { Tabs, Redirect } from 'expo-router'
// import Icon from "react-native-vector-icons/Entypo";
// import clsx from 'clsx'

// interface TabIconProps {
//   Icon: JSX.Element;
//   color: string;
//   focused: boolean;
//   name: string;
// }

// const TabIcon = ({ Icon, color, focused, name }: TabIconProps) => {
//   return (
//     <View className="items-center justify-center gap-2">
//       <Icon

//         resizeMode="contain"
//         className="w-6 h-6"
//         tintColor={color}
//       />
//       <Text className={clsx("font-pregular text-xs", { focused: "font-psemibold" })} style={{ color: color }} > { name }</Text>
//     </View >
//   )
// }

// const TabsLayout = () => {
//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: '#ffa001',
//           tabBarInactiveTintColor: '#cdcde0',
//           tabBarStyle: {
//             backgroundColor: '#161622',
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//             height: 84,
//           }
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon Icon={<HouseLine />} color={color} name="Home" focus={focused} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="bookmark"
//           options={{
//             title: "Bookmark",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focus={focused} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="create"
//           options={{
//             title: "Create",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.plus} color={color} name="Create" focus={focused} />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: "Profile",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.profile} color={color} name="Profile" focus={focused} />
//             )
//           }}
//         />
//       </Tabs>
//     </>
//   )
// }

// export default TabsLayout