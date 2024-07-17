import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageRadio from "@/components/LanguageRadio";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import Container from "@/components/ui/Container";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-backgroundBlue">
      <Container>
        <View className="w-full flex-col justify-between py-8 ">
          <Text className="text-regular font-bbold text-gold">LANGUAGE SELECTION</Text>
          <Text className="text-medium font-bregular text-white">Choose a Language you're comfortable with</Text>
        </View>
        <LanguageRadio />

        <View className="w-full flex-row justify-between items-center py-8">
          <Text className="text-medium font-bregular text-white">@MBL M-SMART</Text>
          <CustomButton showArrow title="Confirm" handlePress={() => router.push("/(auth)/video")} />
        </View>
      </Container>
    </SafeAreaView>
  );
}
