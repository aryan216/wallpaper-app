import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import "./globals.css";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(secgroup)/accountinfo"
          options={{ headerShown: true, title: "Account Info" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
