/* Tarea para la clase que viene (4 de Sep)
Usando lo que vimos de estilos, props, useState, <Text>, <View> y <Pressable>

-Armar una lista de tarjetas que reciben su texto interno mediante props
-Cuando tocas el elemento de la lista, este tiene que cambiar el color de fondo y el color del texto
-El texto dentro de la tarjeta tiene que estar centrado en ambos ejes
-El codigo tiene que estar disponible en Github */

import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native';

const Tarjeta = ({texto}:{texto:String})=> {
  
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  }
  return(
    <Pressable onPress={handlePress}>
       <View style={[styles.card, isPressed && styles.cardPressed]}>
        <Text style={[styles.cardText, isPressed && styles.textPressed]}>{texto}</Text>
      </View>
    </Pressable>
  );
};
const Lista = () => {
  const data = [
    { id: '1', text: 'Tarjeta 1' },
    { id: '2', text: 'Tarjeta 2' },
    { id: '3', text: 'Tarjeta 3' },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Tarjeta texto={item.text} />}
      contentContainerStyle={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPressed: {
    backgroundColor: '#4caf50',
  },
  cardText: {
    color: '#000',
    fontSize: 18,
  },
  textPressed: {
    color: '#fff',
  },
});
export default Lista;