import {View,SafeAreaView,Image,Text} from "react-native";
import {Link} from "expo-router";
export default function account(){

    return(
        <SafeAreaView className="ml-3 mr-3">
            <Text className="text-4xl font-semibold mt-3">Panels</Text>
            <Text >Member since 03/01/2025</Text>

            <Link href="/accountinfo" className="mt-6">
               <View className="flex flex-row items-center bg-gray-700 w-full h-[25vh] rounded-lg p-4 mt-4 gap-3 ">
                <Image className="w-28 h-28 rounded-full" source={{uri:"https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"}}></Image>
                <Text className="text-white ">franchescafrex@gmailcom</Text></View>
            </Link>

            <Text className="text-2xl font-semibold mt-5">About</Text>
            <View className="flex gap-2">
            <Link className="text-lg" href="/accountinfo">Account</Link>
            <Text className="text-lg">Privacy Policy</Text>
            <Text className="text-lg">Terms Of Service</Text>
            <Text className="text-lg">Licences</Text>
            <Text className="text-lg">Version</Text>
            <Text className="text-lg">1.3.1</Text>

            </View>
            <View className="flex mt-60 items-center w-full">
            <Text>Panels © 2023 All Rights Reserved</Text>
            <Text>Panels Wallpaper Mobile App LLC</Text>
            </View>


        </SafeAreaView>
    )
}