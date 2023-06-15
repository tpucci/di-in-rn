import "react-native-get-random-values";

import { ThemeContext } from "@emotion/react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./Home";
import { theme } from "./ui/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
    "Kanit-Thin": require("./assets/fonts/Kanit-Thin.ttf"),
    "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeContext.Provider value={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Home />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
