import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./Home";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
    "Kanit-Thin": require("./assets/fonts/Kanit-Thin.ttf"),
    "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Home />
      </SafeAreaProvider>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Text>Awesome 🎉</Text>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
