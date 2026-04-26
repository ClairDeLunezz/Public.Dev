import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  accent: string;
  textColor: string;
  bordered?: boolean;
  borderColor?: string;
}

export default function PrimaryButton({
  label,
  onPress,
  accent,
  textColor,
  bordered = false,
  borderColor,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: accent },
        bordered && { borderWidth: 2, borderColor: borderColor },
      ]}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});