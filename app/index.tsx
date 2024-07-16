import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageRadio from "@/components/LanguageRadio";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-backgroundBlue">
      <View className="w-full flex-col justify-between px-8 py-8 ">
        <Text className="text-regular font-bbold text-gold">LANGUAGE SELECTION</Text>
        <Text className="text-medium font-bregular text-white">Choose a Language you're comfortable with</Text>
      </View>
      <LanguageRadio />
    </SafeAreaView>
  );
}
