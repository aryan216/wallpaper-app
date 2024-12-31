import {View,Text} from "react-native"
import {Slot,Link} from "expo-router"
export default function Layout(){
    return(
        
        <View>
            <Link href="/account">Go Back</Link>
            <Slot/>
        </View>
    )
}