import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Busqueda from './components/Busqueda';
import BotonRecetas from './components/BotonRecetas';
import InfoReceta from './components/infoReceta';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  //State para almacenar los datos de la receta cuando se hace la peticion a la AOI
  const [datosReceta, setDatosReceta] = useState(null)
  const [error, setError] = useState(null)
  const [recetaElegida, setRecetaElegida] = useState(null)
  
  return (
    <>
       <LinearGradient
        // Background Linear Gradient
        colors={['#FBF5F2', '#AEAFEB']}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0, y: 1.0 }}
        style={styles.gradiente}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>Welcome to the app!</Text>
          <Busqueda 
            setDatosReceta={setDatosReceta}
            setError={setError}
          ></Busqueda>

          {recetaElegida ? (
            
            <InfoReceta 
              title={recetaElegida.title}
              image={recetaElegida.image}
              id={recetaElegida.id}
              setError={setError}
              setRecetaElegida={setRecetaElegida}
            >
            </InfoReceta>
          ):
            <FlatList
              style={styles.lista}
              data={datosReceta}
              renderItem={({ item }) => (
                <BotonRecetas 
                  receta={item} 
                  onPress={() => setRecetaElegida({id: item.id, title: item.title, image: item.image})} 
              />
              )}
              keyExtractor={(item) => item.id.toString()}
              />
          }
          
    </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
  },
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
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
    flex: 1
  }
});
