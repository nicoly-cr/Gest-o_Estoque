import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Componente CustomButton
 * -------------------------------------------------------------
 * Botão customizado com suporte a ícone e feedback de toque (activeOpacity).
 *
 * Props:
 * - title: Texto dentro do botão
 * - onPress: Função executada ao clicar
 * - iconName: Ícone opcional do MaterialIcons (ex: 'arrow-forward')
 */
export default function CustomButton({ title, onPress, iconName }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={18}
          color="#ffffff"
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#c42996', // Cor primária/container da referência
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 8,
  },
});