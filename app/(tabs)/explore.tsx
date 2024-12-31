import { useRef } from "react";
import {View,Text,Button} from "react-native";
import { Modalize } from "react-native-modalize";
export default function explore(){
    const modalRef = useRef<Modalize>(null);
    const openBottomSheet = () => {
        modalRef.current?.open(); // Open the bottom sheet
      };
    return(
        <View style={{ flex: 1 }}>
        <Text>Explore Page</Text>
        <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
  
        {/* Modalize Bottom Sheet */}
        <Modalize ref={modalRef}>
          <View style={{ padding: 20 }}>
            <Text>This is the content of the bottom sheet!</Text>
          </View>
        </Modalize>
      </View>
    
    )
}