import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TextInput,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArtCard from '../components/ArtCard';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function ArtListScreen() {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#64b5f6' },
      headerTintColor: '#fff',
      headerTitle: () => <Text style={styles.headerTitle}>Arts</Text>,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  useEffect(() => {
    fetch(
      'https://openaccess-api.clevelandart.org/api/artworks?cc0=true&has_image=1&limit=15'
    )
      .then(res => res.json())
      .then(json => {
        setArts(json.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#64b5f6" />
      </SafeAreaView>
    );
  }

  const filteredArts = arts.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function renderItem({ item }) {
    const isFav = favorites.some(f => f.id === item.id);
    return (
      <ArtCard
        art={item}
        onPress={() =>
          navigation.navigate('ArtDetail', {
            artworkId: item.id,
            artworkTitle: item.title,
          })
        }
        onFavorite={() => toggleFavorite(item)}
        isFavorite={isFav}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search artworks..."
          placeholderTextColor="#777"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      <FlatList
        data={filteredArts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  searchContainer: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64b5f6',
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 12,
    color: '#333',
  },
  listContent: {
    padding: 12,
  },
});
