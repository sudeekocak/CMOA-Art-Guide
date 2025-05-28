import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ArtCard from '../components/ArtCard';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  if (!favorites || favorites.length === 0) {
    return (
      <SafeAreaView style={[styles.center, styles.container]}>
        <Text style={styles.emptyText}>You didn't choose any favorite yet.</Text>
      </SafeAreaView>
    );
  }

  function renderItem({ item }) {
    return (
      <ArtCard
        art={item}
        onPress={() => navigation.navigate('ArtDetail', {
          artworkId: item.id,
          artworkTitle: item.title,
        })}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
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
    backgroundColor: '#bfefff',  
  },
  listContent: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#1c1c1c',
  },
});
