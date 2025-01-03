
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Dimensions } from "react-native";
import { useState } from "react";
import { useRef } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { ImageCards } from "@/components/ImageCards";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function SuggestedScreen() {
  const modalRef = useRef<Modalize>(null)
  const [selected,setSelected]=useState<Wallpaper | null>(null)
  const openBottomSheet = (wallpaper: Wallpaper) => {
    console.log(wallpaper);
    setSelected(wallpaper);
    modalRef.current?.open(); // Open the bottom sheet
  };
  
  const {height}=Dimensions.get('window')
  const wallpapers = useWallpaper();
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
          />
        }>
      <View className="flex-row gap-5 ">
          
          <View className="flex-1  ">
            {wallpapers.filter((_, index)=>index%2==0).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
          <View className="flex-1 ">
            {wallpapers.filter((_, index)=>index%2==1).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full ">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
        </View>
        </ParallaxScrollView>
        <Modalize ref={modalRef} modalHeight={height*0.80}>
        <View  >
        {selected && (
             <>
               <Image 
                 className="h-[45vh] w-full rounded-lg" 
                 source={{ uri: selected.url }} 
                 resizeMode="cover" 
               />
               <Text className="text-2xl font-bold mt-2 text-center">
                 {selected.title}
               </Text>

               <Button title="Download image"/>

               <View className="flex flex-row items-center mt-8 ml-6">
                 <Image className="w-20 h-20 rounded-full " source={{uri:selected.creator_url}}/>
                 <Text className="text-2xl text-grey-800 font-normal ml-6">{selected.creator}</Text>
               </View>
               <Text className="text-lg mt-2 ml-6">{selected.category}</Text>
               <Text className="text-lg mt-2 ml-6">{selected.copyright}</Text>
              
             </>
        )}
        </View>
      </Modalize>
    </View>
  );
}

function LikedScreen() {
  const modalRef = useRef<Modalize>(null)
  const [selected,setSelected]=useState<Wallpaper | null>(null)
  const openBottomSheet = (wallpaper: Wallpaper) => {
    console.log(wallpaper);
    setSelected(wallpaper);
    modalRef.current?.open(); // Open the bottom sheet
  };
  
  const {height}=Dimensions.get('window')
  const wallpapers = useWallpaper();
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://images.pexels.com/photos/211816/pexels-photo-211816.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
          />
        }>
      <View className="flex-row gap-5 ">
          
          <View className="flex-1  ">
            {wallpapers.filter((_, index)=>index%2==0).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
          <View className="flex-1 ">
            {wallpapers.filter((_, index)=>index%2==1).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full ">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
        </View>
        </ParallaxScrollView>
        <Modalize ref={modalRef} modalHeight={height*0.80}>
        <View  >
        {selected && (
             <>
               <Image 
                 className="h-[45vh] w-full rounded-lg" 
                 source={{ uri: selected.url }} 
                 resizeMode="cover" 
               />
               <Text className="text-2xl font-bold mt-2 text-center">
                 {selected.title}
               </Text>

               <Button title="Download image"/>

               <View className="flex flex-row items-center mt-8 ml-6">
                 <Image className="w-20 h-20 rounded-full " source={{uri:selected.creator_url}}/>
                 <Text className="text-2xl text-grey-800 font-normal ml-6">{selected.creator}</Text>
               </View>
               <Text className="text-lg mt-2 ml-6">{selected.category}</Text>
               <Text className="text-lg mt-2 ml-6">{selected.copyright}</Text>
              
             </>
        )}
        </View>
      </Modalize>
    </View>
  );
}

function LibraryScreen() {
  const modalRef = useRef<Modalize>(null)
  const [selected,setSelected]=useState<Wallpaper | null>(null)
  const openBottomSheet = (wallpaper: Wallpaper) => {
    console.log(wallpaper);
    setSelected(wallpaper);
    modalRef.current?.open(); // Open the bottom sheet
  };
  
  const {height}=Dimensions.get('window')
  const wallpapers = useWallpaper();
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
          />
        }>
      <View className="flex-row gap-5 ">
          
          <View className="flex-1  ">
            {wallpapers.filter((_, index)=>index%2==0).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
          <View className="flex-1 ">
            {wallpapers.filter((_, index)=>index%2==1).map((w: Wallpaper) => (
              <View className="m-2 rounded-lg overflow-hidden w-full ">
                <ImageCards onPress={()=>openBottomSheet(w)} wallpaper={w} />
              </View>
            ))}
          </View>
        </View>
        </ParallaxScrollView>
        <Modalize ref={modalRef} modalHeight={height*0.80}>
        <View  >
        {selected && (
             <>
               <Image 
                 className="h-[45vh] w-full rounded-lg" 
                 source={{ uri: selected.url }} 
                 resizeMode="cover" 
               />
               <Text className="text-2xl font-bold mt-2 text-center">
                 {selected.title}
               </Text>

               <Button title="Download image"/>

               <View className="flex flex-row items-center mt-8 ml-6">
                 <Image className="w-20 h-20 rounded-full " source={{uri:selected.creator_url}}/>
                 <Text className="text-2xl text-grey-800 font-normal ml-6">{selected.creator}</Text>
               </View>
               <Text className="text-lg mt-2 ml-6">{selected.category}</Text>
               <Text className="text-lg mt-2 ml-6">{selected.copyright}</Text>
              
             </>
        )}
        </View>
      </Modalize>
    </View>
  );
}
