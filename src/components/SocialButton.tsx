import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

interface Props {
  label: string;
  icon: string;
  url: string;
  color: string;
}

export default function SocialButton({ label, icon, url, color }: Props) {
  function handlePress() {
    Linking.openURL(url).catch(() =>
      console.warn('Não foi possível abrir o link:', url)
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.85}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 12,
    flex: 1,
    minWidth: '45%',
  },
  icon: { fontSize: 18 },
  label: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});