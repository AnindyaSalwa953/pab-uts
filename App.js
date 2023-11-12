import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Text } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/home'; 
import Profile from './screens/profile'; 
import Category from './screens/Category'; 
import BestSeller from './screens/BestSeller'; 

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHeader = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Category':
              iconName = 'document-text-outline';
              break;
            case 'BestSeller':
              iconName = 'star-outline';
              break;
            case 'Profile':
              iconName = 'person-circle-outline';
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? 'black' : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? 'black' : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHeader} />
      <Tab.Screen name="Category" component={Category} options={noHeader} />
      <Tab.Screen name="BestSeller" component={BestSeller} options={noHeader} />
      <Tab.Screen name="Profile" component={Profile} options={noHeader} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="BestSeller" component={BestSeller} options={noHeader} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
