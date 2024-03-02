import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Componente para mostrar un botón de receta con una breve descripción
export default function BotonRecetas ({ receta, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[styles.title, styles.boxTitle]}>{receta.title}</Text>
      </View>
      <Pressable style={styles.boton} onPress={() => onPress(receta.id)}>
        <Text style={styles.botonText}>Read more</Text>
      </Pressable>
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
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boton: {
    backgroundColor: '#ACD4EA',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  botonText: {
    fontSize: 16
  }
});
