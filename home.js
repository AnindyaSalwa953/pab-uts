import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Home = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      >
        <Box
          p={"0,9"}
          borderBottomColor={"white.500"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            />
          </Box>
          <Box flex={1.9}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      
      <Header title={"Daftar Produk"} />
      <Box py={""} bg="blue.300">
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {datas.slice().map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  navigation.navigate("News Detail", { item: item })
                }
              >
                <Box w={"48"} mr={"4"} ml={index == 1 ? "4" : "0"}>
                  <Image
                    source={{ uri: item.image }}
                    w="full"
                    h="200"
                    alt="Image Data"
                    mb={"2"}
                  />
                  <Text fontSize={"xs"} color="light.300">
                    {item.date}
                  </Text>
                  <Heading
                    fontSize={"sm"}
                    lineHeight={"xs"}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    color="light.50"
                  >
                    {item.title}
                  </Heading>
                </Box>
              </TouchableOpacity>
            );
          })}
        </ScrollView> */}
      </Box>
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      

      />
    </>
  );

};

export default Home;