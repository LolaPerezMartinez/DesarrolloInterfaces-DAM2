import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BookOpen } from "lucide-react-native";

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Image 
          source={require("../assets/Biblioteca.jpeg")} 
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>Librosaurios</Text>
        <Text style={styles.subtitle}>
          Tu biblioteca personal de PDFs y EPUBs lista para descargar.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Libros')}
        >
          <BookOpen color="#FFF7CD" size={20} style={{marginRight: 10}} />
          <Text style={styles.buttonText}>Explorar Libros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#EBF4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    width: '100%',
  },
  img: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e21f50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: "#e21f50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF7CD",
    fontWeight: "bold",
    fontSize: 16,
  },
});