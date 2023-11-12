import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {ImageBackground} from "react-native";
const Header = ({ title, withBack = false }) => {
  const whiteColor="FFFFFF";
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets/bgpab953.jpeg')}
    style={{flex:1}}
    >
    <SafeAreaView>
    <StatusBar barStyle="light" backgroundColor={whiteColor} />
    <Box bg={"whiteColor"} p={"4"}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack alignItems="center">
          {/* {!withBack ? (
            <>
              
            </>
          ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                
              </TouchableOpacity>
            )} */}
            <Ionicons name="arrow-back-outline" size={32} color="black" />
            <Heading color={"black"}>{title}</Heading>
          </HStack>

          <HStack space={"1xl"}>
            
            
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default Header;