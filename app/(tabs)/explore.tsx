import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { useRef } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { ImageCards } from "@/components/ImageCards";

export default function Explore() {
  const modalRef = useRef<Modalize>(null);

  const openBottomSheet = () => {
    modalRef.current?.open(); // Open the bottom sheet
  };
  const wallpapers = useWallpaper();
  return (
    <View style={{ flex: 1 }}>
      {/* ParallaxScrollView Content */}
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/DwSQoV3nS7-MFbecu-_zAQ",
            }}
          />
        }
      >
        {/* Main Content */}
        <View className="flex-row gap-5 ">
          
          <View className="flex-1  ">
            {wallpapers.filter((_, index)=>index%2==0).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full">
                <ImageCards wallpaper={w} />
              </View>
            ))}
          </View>
          <View className="flex-1 ">
            {wallpapers.filter((_, index)=>index%2==1).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full ">
                <ImageCards wallpaper={w} />
              </View>
            ))}
          </View>
        </View>

        {/* Button to Open Bottom Sheet */}
        {/* <Button title="Open Bottom Sheet" onPress={openBottomSheet} /> */}
      </ParallaxScrollView>

      {/* Modalize Bottom Sheet */}
      {/* <Modalize ref={modalRef}>
        <View style={{ padding: 20 }}>
          <Text>This is the content of the bottom sheet!</Text>
        </View>
      </Modalize> */}
    </View>
  );
}
