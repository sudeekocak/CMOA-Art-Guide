
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { createBottomTabNavigator }     from '@react-navigation/bottom-tabs';
import Ionicons                          from '@expo/vector-icons/Ionicons';
import HomeScreen       from './screens/HomeScreen';
import ArtListScreen    from './screens/ArtListScreen';
import ArtDetailScreen  from './screens/ArtDetailScreen';
import FavoritesScreen  from './screens/FavoritesScreen';
import AboutScreen      from './screens/AboutScreen';


import { FavoritesProvider } from './contexts/FavoritesContext';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Arts"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#63b8ff',
        tabBarInactiveTintColor: '#8b8386',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Arts')       iconName = 'image';
          else if (route.name === 'Favorites') iconName = 'heart';
          else                                  iconName = 'information-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Arts"    component={ArtListScreen}   />
      <Tab.Screen name="Favorites"  component={FavoritesScreen} />
      <Tab.Screen name="About Us"   component={AboutScreen}     />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
   
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />

        
          <Stack.Screen 
            name="Main" 
            component={MainTabs} 
            options={{ headerShown: false }} 
          />

        
          <Stack.Screen 
            name="ArtDetail" 
            component={ArtDetailScreen}
            options={({ route }) => ({
              title: route.params.artworkTitle,
              headerBackTitle: 'Back',
            })}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
