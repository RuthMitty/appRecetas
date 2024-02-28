import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Busqueda from './components/Busqueda';

export default function App() {

  //State para almacenar los datos de la receta cuando se hace la peticion a la AOI
  const [datosReceta, setDatosReceta] = useState(null)
  const [error, setError] = useState(null)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Busqueda 
        setDatosReceta={setDatosReceta}
        setError={setError}
      ></Busqueda>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
