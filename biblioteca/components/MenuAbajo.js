import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Book, HelpCircle, BarChart3 } from "lucide-react-native";

export default function MenuAbajo() {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Home color="#e21f50" size={24} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Descargas")}>
        <BarChart3 color="#005461"  size={24} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Ayuda")}>
        <HelpCircle color="#e21f50" size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#FFF",
  },
});