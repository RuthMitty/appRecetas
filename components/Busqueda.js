import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Busqueda({setDatosReceta, setError}) {
  const [receta, setReceta] = useState("")
  const apiKey = "c972c496c0404b048eff89275660a2f6"

  //Obtener la receta de la API
  const getReceta = async () =>{
    try {
      const res =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${receta}`)
      const data = await res.json()
      setDatosReceta(data)
      setError(null)
    } catch (err) {
      setError("Error finding recipe data")
    }
  }

  useEffect(() =>{
    receta ? getReceta : setDatosReceta(null)
  }, [receta])

  return (
    <>
        <View style={styles2.inputWrapper}>
            <TextInput 
                style={styles2.input}
                placeholder='Enter recipe name'
                value={receta}
                onChangeText={(text) => setReceta()}  
            />
        </View>
        <TouchableOpacity style={styles2.button} onPress={getReceta}>
          <Text>Obtener Receta</Text>
        </TouchableOpacity>
    </>
  )
}

  const styles2 = StyleSheet.create({
    inputWrapper:{
        backgroundColor: "#eee",
        padding: 10,
        fontSize: 30,
        width: 180,
        marginTop: 15,
        color: "lightcoral",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height: 40,
        //cursor: "pointer"
    },
    input:{
      textAlign:"center"
    },
    button:{
      backgroundColor: "lightcoral",
      padding: 10,
      margin: 10,
      borderRadius: 10
    }
  });

export default Busqueda