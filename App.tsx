import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
    "Kanit-Thin": require("./assets/fonts/Kanit-Thin.ttf"),
    "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Home />
    </SafeAreaProvider>
  );
}
