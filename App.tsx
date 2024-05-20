import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
} from "@expo-google-fonts/sora";

import { Routes } from "@/routes";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" translucent />
      <Routes />
    </View>
  );
}
