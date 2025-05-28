import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ArtCard({ item, art, onPress, onFavorite, isFavorite }) {
  const artwork = art ?? item ?? {};

  
  let img = null;
  if (artwork.images && artwork.images.web && artwork.images.web.url) {
    img = artwork.images.web.url;
  }

 
  let artist = 'Unknown Artist';
  if (
    artwork.creators &&
    Array.isArray(artwork.creators) &&
    artwork.creators.length > 0
  ) {
    artist = artwork.creators[0].description;
  }

  return (
    <View style={styles.cardWrapper}>
      {onFavorite && (
        <TouchableOpacity onPress={onFavorite} style={styles.favButton}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={20}
            color={isFavorite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.7}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} />
        ) : (
          <View style={styles.noImg}>
            <Text style={styles.noImgText}>No image</Text>
          </View>
        )}
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {artwork.title || 'Untitled'}
        </Text>
        <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
          {artist}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 12,
    position: 'relative',
  },
  favButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 4,
    zIndex: 10,      
    elevation: 10,   
  },
  card: {
    backgroundColor: '#e0f7fa', 
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 6,
    marginBottom: 8,
  },
  noImg: {
    width: 160,
    height: 160,
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: '#ffcdd2', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImgText: {
    color: '#b71c1c',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01579b', 
    textAlign: 'center',
    marginBottom: 4,
  },
  artist: {
    fontSize: 14,
    color: '#0277bd', 
    textAlign: 'center',
  },
});
