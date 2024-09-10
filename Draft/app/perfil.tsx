import { Pressable, TextInput, Text, View, Button, Modal, StyleSheet } from "react-native";
import { useState } from "react";

export default function ObtenerNom() {
  const [nombre, setNombre] = useState('Nombre no ingresado');   
  const [inputValue, setInputValue] = useState(''); 
  const [modalVisible, setModalVisible] = useState(false);

  const handleGuardar = () => {
    setNombre(inputValue);  // Actualiza el nombre con el valor ingresado
    setModalVisible(false); // Cierra el modal
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Nombre: {nombre}</Text>
      <Button
        title="Cambiar nombre"
        onPress={() => setModalVisible(true)} 
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Función para cerrar el modal si se presiona "back" en Android
      >
        <View style = {{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View style ={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: "center",
            shadowColor: "#000",
            }}
            >
              <TextInput
                onChangeText={newText => setInputValue(newText)}
                value={inputValue}
                placeholder="Ingresa un nombre"
              />
            <Button
              title="Guardar"
              onPress={handleGuardar}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
