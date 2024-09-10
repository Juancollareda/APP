import { Pressable, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function ObtenerNom() {
  const [inputValue, setInputValue] = useState(''); 
  const [nombre, setNombre] = useState('Nombre no ingresado');   

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Nombre: {nombre}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: 200 }}
        onChangeText={newText => setInputValue(newText)}
        value={inputValue}
        placeholder="Ingresa un nombre"
      />
      <Button
        title="Apretar"
        onPress={() => setNombre(inputValue)} 
      />
    </View>
  );
}
