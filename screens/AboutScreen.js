import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = (width - 60) / 3;

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>About Us</Text>
        </View>
        <Text style={styles.text}>
          The Cleveland Museum of Art is renowned for the quality and breadth of its collection, which includes more than 63,000 artworks and spans 6,000 years of achievement in the arts. The museum is a significant international forum for exhibitions, scholarship, and performing arts and is a leader in digital innovations. One of the top comprehensive art museums in the nation, recognized for its award-winning Open Access program and free of charge to all, the Cleveland Museum of Art is located in the University Circle neighborhood.
        </Text>

        <Text style={styles.text}>
          This Art-Guide was created specifically for visitors to the Cleveland Museum of Art, using the Cleveland Museum of Art Open Access API, so that visitors can examine artworks while visiting the museum and after visiting the museum.
        </Text>

        <Text style={styles.text}>
          With this Mobile App you can save your favorite artworks, search arts by their names and discover pieces that interest you most. Whether you’re planning your museum visit in advance or exploring on the spot, artwork descriptions will help you learn at your own pace. So while you enjoy all the artwork from everywhere you can also choose your favorites before your visit and basically plan your visit with the pieces you'd like to see.We don't want you to lose any time while looking for the best piece !
        </Text>

        <View style={styles.gallery}>
          <Image
            source={require('../assets/müze 1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/müze 2.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/müze 3.jpg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#e3f2fd', 
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  titleBox: {
    backgroundColor: '#64b5f6', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
  },
  text: {
    fontSize: 16,
    color: '#333', 
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 22,
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    backgroundColor: '#bbdefb', 
  },
});
