import { Wallpaper } from "@/hooks/useWallpaper";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export function ImageCards({ wallpaper,onPress }: {
   wallpaper: Wallpaper,
   onPress:()=>void;

   }) {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={onPress}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
});
