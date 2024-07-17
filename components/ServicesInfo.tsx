import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ServiceInfoType } from '@/types'

interface Props {
    items: ServiceInfoType[]
}

const SingleInfo = ({ title, info }: ServiceInfoType) => {
    return (
        <View className='w-full flex-row items-center my-2'>
            <Text className="text-white font-bregular text-medium flex-1 text-right">{title}</Text>
            <View className='w-1 h-full bg-gold mx-4' />
            <Text className="text-white font-bregular text-medium flex-1">{info}</Text>
        </View>
    )
}


const ServicesInfo = ({ items }: Props) => {
    return (
        <View className='w-full flex-col items-center my-2'>
            <FlatList
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <SingleInfo title={item.title} info={item.info} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    width: '100%',
                    alignItems: 'center',
                    marginVertical: 8
                }}
            />
        </View>
    )
}

export default ServicesInfo