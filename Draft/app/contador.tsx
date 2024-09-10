import { Pressable, Text, View, Button } from "react-native";
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(prev => prev + 1);
  }
  const restar = () => {
    if (contador > 0){

      setContador(prev => prev - 1);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar}>
      </Button>
      <Button title="bajar" onPress={restar}></Button>
    </View>
  );
}
