import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from "react-native";

const API_URL = "https://espacio199.com/biblioteca/api.php";

export default function Descargas() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        setLibros(datos);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    }
    cargarDatos();
  }, []);

  
  // Ejecuta cuando los libros ya están cargados en el estado
  useEffect(() => {
    //Integración con Chart.js (Solo Web) y cuando la lista sea mayor de 0
    if (Platform.OS === "web" && libros.length > 0) {
      import("../web/graficaDescargas").then((modulo) => {
        modulo.pintarGraficaDescargas("grafica-descargas", libros);
      });
    }
  }, [libros]);

  if (cargando) return <ActivityIndicator size="large" />;

  return (
    //A continuación realizamos dos funciones:
    //1. Mostramos la lista de libros en un contenedor a través de un map
    //   mostrando el nombre y el numero de descargas
    //2. Realizamos la grafica que obtenemos a traves de   modulo.pintarGraficaDescargas("grafica-descargas", libros);
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> Descargas por libro</Text>

      <View style={styles.lista}>
        {libros.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.libro}>{item.titulo}</Text>
            <View style={styles.contDescarga}>
              <Text style={styles.descargas}>{item.total_descargas}</Text>
              <Text style={styles.txtHits}>Descargas</Text>
            </View>
          </View>
        ))}
      </View>

     
      {Platform.OS === "web" && (
        <View style={styles.graficaSeccion}>
          <View
            nativeID="grafica-descargas"
            style={{ height: 350, width: "100%" }}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EBF4F6", padding: 16 },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#e21f50",
    textAlign: "center",
  },
  lista: { marginBottom: 30 },
  card: {
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  libro: { flex: 1, 
  fontSize: 15, 
  fontWeight: "600", 
  color: "#333" },

  contDescarga: { 
    alignItems: "center", 
    minWidth: 50 },

  descargas: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#005461" 
  },

  txtHits: { 
    fontSize: 9, 
    color: "#e21f50",
    fontWeight: "bold" },

  graficaSeccion: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 50,
  },
  subtituloGrafica: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});