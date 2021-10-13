import React from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

export default function Form() {
    return ( 
    <View>
        <View>
            <Text>Altura</Text>

            <TextInput 
            placeholder="Ex. 1.75"
            KeyboardType="numeric"> 
            </TextInput>

            <Text>Peso</Text>

            <TextInput
            placeholder="Ex. 75.365"
            keyboardType="numeric"
            >
        
            </TextInput>

            <Button  title="Calcular IMC"/>
        </View>
        <ResultImc/>
    </View>
    )
}