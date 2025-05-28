import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 8,
    backgroundColor: '#e0f7fa', 
    borderRadius: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    color: '#0277bd', 
  },
  value: {
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    color: '#333', 
  },
});