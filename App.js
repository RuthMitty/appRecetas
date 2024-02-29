import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Busqueda from './components/Busqueda';
import BotonRecetas from './components/BotonRecetas';
import { LinearGradient } from 'expo-linear-gradient';
// npx expo install expo-linear-gradient

export default function App() {

  //State para almacenar los datos de la receta cuando se hace la peticion a la AOI
  const [datosReceta, setDatosReceta] = useState(null)
  const [error, setError] = useState(null)

  return (
    <>
       <LinearGradient
        // Background Linear Gradient
        colors={['#FBF5F2', '#FAC3BE']}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0, y: 1.0 }}
        style={styles.gradiente}
      >
        <View style={styles.container}>
          <Busqueda 
            setDatosReceta={setDatosReceta}
            setError={setError}
          ></Busqueda>
          <FlatList
          style={styles.lista}
          data={datosReceta}
          renderItem={({ item }) => (
            <BotonRecetas receta={item} onPress={(id) => console.log('Ver receta con ID:', id)} 
          />
      )}
      keyExtractor={(item) => item.id.toString()}
      />
    </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:100
  },
  gradiente: {
    flex: 1
  },
  lista: {
    paddingHorizontal: 30
  }
});
