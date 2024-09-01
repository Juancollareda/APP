/* Tarea para la clase que viene (4 de Sep)
Usando lo que vimos de estilos, props, useState, <Text>, <View> y <Pressable>

-Armar una lista de tarjetas que reciben su texto interno mediante props
-Cuando tocas el elemento de la lista, este tiene que cambiar el color de fondo y el color del texto
-El texto dentro de la tarjeta tiene que estar centrado en ambos ejes
-El codigo tiene que estar disponible en Github */

import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const obj_lista = [''];
const Lista = () => {
  function push(obj:string){
    obj_lista.push(obj);
  }
  function remove(obj:string){
    if (obj in obj_lista){
      var pos = obj_lista.indexOf(obj);
      obj_lista.slice(pos,1);
    }
    else{
      console.log("no esta el elemento",obj," en la lista")
    }
  }
  return (
    <div>
        <ul>
            {obj_lista.map((objeto, index) => (
                <li key={index}>{objeto}</li>
            ))}
        </ul>
    </div>
);
}
export default function HomeScreen() {
    return (
      <>
        <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Stock</ThemedText>
               
            </ThemedView>
      </>
          )}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    }})