import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Componente CustomInput
 * -------------------------------------------------------------
 * Um campo de texto reutilizável com suporte a ícone lateral,
 * label e estilos padronizados.
 *
 * Props:
 * - label: Texto exibido acima do campo
 * - iconName: Nome do ícone do MaterialIcons (ex: 'mail', 'lock')
 * - value: Valor do estado (state)
 * - onChangeText: Função disparada ao digitar
 * - placeholder: Texto de dica dentro do campo
 * - secureTextEntry: Se verdadeiro, esconde o texto (para senhas)
 * - keyboardType: Tipo do teclado (ex: 'email-address', 'default')
 */
export default function CustomInput({
  label,
  iconName,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}) {
  return (
    <View style={styles.container}>
      {/* Label do campo */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Caixa do Input com Ícone */}
      <View style={styles.inputWrapper}>
        {iconName && (
          <MaterialIcons
            name={iconName}
            size={20}
            color="#75777d"
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#44474c',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c5c6cd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#191c1e',
    fontSize: 14,
  },
});