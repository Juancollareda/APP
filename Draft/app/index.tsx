import { Pressable, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Link to = "/perfil">
        <Pressable>
          <Text>Perfil</Text>
        </Pressable>
      </Link>
      <Link to = "/tarjetas">
        <Pressable>
          <Text>Tarjetas</Text>
        </Pressable>
      </Link>
      <Link to = "/contador">
        <Pressable>
          <Text>contador</Text>
        </Pressable>
      </Link>
    </View>
  );
}
