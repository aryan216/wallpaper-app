import { Wallpaper } from "@/hooks/useWallpaper";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export function ImageCards({ wallpaper }: { wallpaper: Wallpaper }) {
  const [liked, setLiked] = useState(false);

  return (
    <View className=" relative">
      <Image
        style={styles.image}
        source={{ uri: wallpaper.url }}
        className=" rounded-2xl"
      />
      <View className=" absolute bottom-0 w-full bg-black/50 p-2">
        <View className=" w-9/10 flex flex-row justify-between">
          <Text className=" text-white text-lg">{wallpaper.title}</Text>
          <AntDesign
            onPress={(event) => setLiked((prev) => !prev)}
            name={liked ? "heart" : "hearto"}
            size={24}
            color={liked ? "red" : "white"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    
    height: 250,
  },
});
