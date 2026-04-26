import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.credit}>Desenvolvido por</Text>
      <Text style={styles.name}>Artur e Pietro</Text>
      <Text style={styles.course}>
        ADS • Disciplina: Tópicos Especiais
      </Text>
      <Text style={styles.year}>© {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
    paddingTop: 24,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#2a293e',
    marginBottom: 20,
  },
  credit: { color: '#555577', fontSize: 13 },
  name: {
    color: '#a78bfa',
    fontWeight: '800',
    fontSize: 18,
    marginTop: 4,
  },
  course: { color: '#555577', fontSize: 12, marginTop: 6, textAlign: 'center' },
  year: { color: '#3a3858', fontSize: 11, marginTop: 8 },
});