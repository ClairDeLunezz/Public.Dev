import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoPrimarioProps {
  titulo: string;
  aoPressionar: () => void;
  temaEscuro: boolean;
}

export function BotaoPrimario({ titulo, aoPressionar, temaEscuro }: BotaoPrimarioProps) {
  return (
    <TouchableOpacity 
      style={temaEscuro ? estilos.botaoEscuro : estilos.botaoClaro} 
      onPress={aoPressionar}
    >
      <Text style={estilos.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botaoEscuro: {
    width: '100%',
    backgroundColor: '#050505',
    borderWidth: 2,
    borderColor: '#ff003c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#ff003c',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  botaoClaro: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  }
});