import {View,Text} from "react-native";
import {Link} from "expo-router";
export default function account(){

    return(
        <View>
            <Text>This is Account</Text>
            <Link href="/accountinfo">This  Link goes to AccountInfo Page</Link>
        </View>
    )
}