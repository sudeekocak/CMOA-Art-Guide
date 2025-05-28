import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainTabs from './MainTabs';
import ArtDetailScreen from '../screens/ArtDetailScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
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
  );
}