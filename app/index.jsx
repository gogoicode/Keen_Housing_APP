import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">IoT Smart Home</Text>
      <StatusBar style="auto" />
      <Link href="/Home" style={{ color: "#A4A4A4" }}>
        Go to Home
      </Link>
    </View>
  );
}
