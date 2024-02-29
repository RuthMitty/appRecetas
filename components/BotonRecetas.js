import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente para mostrar un botón de receta con una breve descripción
export default function BotonRecetas ({ receta, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{receta.title}</Text>
      <Button style={styles.boton} title="Ver Receta" onPress={() => onPress(receta.id)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boton: {
    backgroundColor: '#fff'
  }
});
