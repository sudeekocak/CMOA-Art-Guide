import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/clevelandmüzefoto.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>
          Welcome to the Cleveland Museum of Art's Mobile Art Guide! 🎨
        </Text>
        <Text style={styles.p}>
          Click the start button to discover the museum's artworks one by one!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  p: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#63b8ff',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});
