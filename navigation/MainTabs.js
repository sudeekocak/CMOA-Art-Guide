import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ArtListScreen from '../screens/ArtListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
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
          if (route.name === 'Arts') iconName = 'image';
          else if (route.name === 'Favorites') iconName = 'heart';
          else iconName = 'information-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Arts" component={ArtListScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="About Us" component={AboutScreen} />
    </Tab.Navigator>
  );
}