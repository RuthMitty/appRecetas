import React, {useState, useEffect} from "react";
import { View, Text, FlatList, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function infoReceta({id, setError, title, image, setRecetaElegida}){
    const apiKey = "c972c496c0404b048eff89275660a2f6";
    
    const [instrucciones, setInstrucciones] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        const getRecetaCompleta = async () => {
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
                const data = await res.json();

                if (data.length > 0 && data[0].steps) {
                    const steps = data[0].steps.map(step => ({ number: step.number, step: step.step }));
                    setInstrucciones(steps);

                    let allIngredients = [];
                    data[0].steps.forEach(step => {
                        const ingredients = step.ingredients;
                        allIngredients = allIngredients.concat(ingredients);
                    });
                    setIngredientes(allIngredients);
                } else {
                    setError("No se encontraron instrucciones o ingredientes para esta receta.");
                }
            } catch (error) {
                setError("Error al cargar la receta.");
            }
        };

        if (id) {
            getRecetaCompleta();
        } else {
            setInstrucciones([]);
            setIngredientes([]);
        }
    }, [id]);

    const renderStepItem = ({ item }) => (
        <View style={{marginBottom: 15}}>
            <Text>{item.number}: {item.step}</Text>
        </View>
        );
    
        const renderIngredientItem = ({ item }) => (
        <View style={{ marginBottom: 10 }}>
            <Text>- {item.name}</Text>
        </View>
    );


    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: "center" }}>{title}</Text>
                <Image source={{uri : image}} style={{ width: 200, height: 200, marginVertical: 8, marginHorizontal: 50 }}></Image>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Steps:</Text>
                <FlatList
                    scrollEnabled={false}
                    data={instrucciones}
                    renderItem={renderStepItem}
                    keyExtractor={(item) => item.number.toString()}
                />
            
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Ingredients:</Text>
                <FlatList
                    scrollEnabled={false}
                    data={ingredientes}
                    renderItem={renderIngredientItem}
                    keyExtractor={(item, index) => `${item.id}-${item.name}-${index}`}
                />
            </ScrollView>
            
            <Pressable style={styles.boton} onPress={() => setRecetaElegida(null)}>
                <Text style={styles.botonText}>Volver</Text>
            </Pressable>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      width: 325,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      flex: 1,
      backgroundColor: 'white',
      overflow: 'scroll'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: "black"
    },
    boton: {
      backgroundColor: '#ACD4EA',
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 5,
    },
    botonText: {
      fontSize: 16
    },
  });