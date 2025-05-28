import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import InfoRow from '../components/InfoRow';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function ArtDetailScreen(props) {
  const artworkId = props.route.params.artworkId;
  const artworkTitle = props.route.params.artworkTitle;

  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some(f => f.id === artworkId);

  useEffect(() => {
    fetch(
      'https://openaccess-api.clevelandart.org/api/artworks/' + artworkId
    )
      .then(res => res.json())
      .then(json => {
        setArt(json.data);
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
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!art) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.errorText}>Art couldn't be found.</Text>
      </SafeAreaView>
    );
  }

  function getValue(v) {
    return v && v !== '' ? v : '';
  }

  const imgUrl = art.images?.web?.url;
  const artistName = art.creators?.[0]?.description || '';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{artworkTitle}</Text>
          <TouchableOpacity
            onPress={() => toggleFavorite(art)}
            style={styles.favButton}
          >
            <Ionicons
              name={isFav ? 'heart' : 'heart-outline'}
              size={28}
              color={isFav ? 'tomato' : '#666'}
            />
          </TouchableOpacity>
        </View>

        {imgUrl ? (
          <Image source={{ uri: imgUrl }} style={styles.img} />
        ) : (
          <Text style={styles.noImg}>No Image</Text>
        )}

        <InfoRow label="Artist" value={artistName} />
        <InfoRow label="Date" value={getValue(art.creation_date)} />
        <InfoRow label="Technique" value={getValue(art.technique)} />
        <InfoRow label="Department" value={getValue(art.department)} />

        <Text style={styles.note}>{getValue(art.wall_description)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    padding: 20,
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#333' },
  errorText: { color: '#b71c1c' },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b0e0e6', 
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    color: '#fff', 
  },
  favButton: { marginLeft: 12 },
  img: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
    marginVertical: 15,
    borderRadius: 6,
    backgroundColor: '#e0f7fa', 
  },
  noImg: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 15,
  },
  note: {
    fontSize: 14,
    color: '#333',
    marginTop: 12,
    lineHeight: 20,
    textAlign: 'left',
  },
});
