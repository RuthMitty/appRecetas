import React, {useState} from "react";

export default function infoReceta({id, setError}){
    const [infoReceta, setInfoReceta] = useState("");

    const getRecetaCompleta = async () => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`);
            const data = await res.json();
            setInfoReceta (data.steps);
            const titulo = infoReceta.name;
            const instrucciones = infoReceta.map(pasos => pasos.step);
            const ingredientes = infoReceta.map(cosa => cosa.ingredients);
        } catch (e){
            setError("Valió barriga señor verga no encuentro la receta");
            console.log(setError)
        }
    
    }
    return(
        <View>
            <Text>{titulo}</Text>
            
        </View>
    );
}