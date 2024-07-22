import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const QRScanner = () => {
    return (
        <SafeAreaView className="h-full bg-backgroundBlue">
            <Text>Scanner</Text>
        </SafeAreaView>
    )
}

export default QRScanner