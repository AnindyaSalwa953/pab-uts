import React from 'react';
import { Text, Box, Image, ScrollView } from 'native-base';

const  BestSeller = () => {
    return (
        <>
    {/* BACKGROUND */}
    <Image
      source={require('../assets/bgpab953.jpeg')}
      alt="Alternate Text"
      size="100%"
      resizeMode="cover"
      style={{ position: 'absolute', zIndex: -1 }}
    />

    <ScrollView>
    {/* GAMBAR 1 */}
    <Box
      borderWidth={1}
      borderRadius={8}
      overflow="hidden"
      width="300px"
      height="200px"
      marginLeft={60}
      marginTop={60}
    >
      <Image
        source={require('../assets/bestseller 1.jpeg')}
        alt="Your Image"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <Box p={4} bg="rgba(0, 0, 0, 0.5)" position="absolute" bottom={0} left={0} right={0}>
        <Text color="white" fontSize="lg" fontWeight="bold">
        Madame Gie Madame Jelly Much
        </Text>
      </Box>
    </Box>

    {/* GAMBAR 2 */}
    <Box
      borderWidth={1}
      borderRadius={8}
      overflow="hidden"
      width="300px"
      height="200px"
      marginLeft={60}
      marginTop={60}
    >
      <Image
        source={require('../assets/bestseller 2.jpeg')}
        alt="Your Image"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <Box p={4} bg="rgba(0, 0, 0, 0.5)" position="absolute" bottom={0} left={0} right={0}>
        <Text color="white" fontSize="lg" fontWeight="bold">
        Madame Gie Madame Complete Make Up Kit - MakeUp Face Pallete
        </Text>
      </Box>
    </Box>

    {/* GAMBAR 3 */}
    <Box
      borderWidth={1}
      borderRadius={8}
      overflow="hidden"
      width="300px"
      height="200px"
      marginLeft={60}
      marginTop={60}
    >
      <Image
        source={require('../assets/best seller 3.jpeg')}
        alt="Your Image"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <Box p={4} bg="rgba(0, 0, 0, 0.5)" position="absolute" bottom={0} left={0} right={0}>
        <Text color="white" fontSize="lg" fontWeight="bold">
        Madame Gie BB Femme Foundation Liquid - MakeUp | Velour 
        </Text>
      </Box>
    </Box>
    </ScrollView>

        </>
        
    
    );
}


export default BestSeller;
