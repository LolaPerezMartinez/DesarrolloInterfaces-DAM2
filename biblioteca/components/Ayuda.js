import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as LucideIcons from "lucide-react-native";

export default function Ayuda() {
  const [documentacion, setDocumentacion] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    // Pedimos la documentación al NUEVO archivo PHP en formato JSON
    fetch("https://espacio199.com/biblioteca/api.php")
      .then((res) => res.json())
      .then((json) => {
        setDocumentacion(json);
        setCargando(false);
      })
      .catch((err) => console.error("Error al cargar la ayuda:", err));
  }, []);

  if (cargando) {
    return (
      <ActivityIndicator
        size="large"
        color="#3D45AA"
        style={{ marginTop: 50 }}
      />
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Ayuda</Text>

      <List.Section>
        <List.Accordion
          title="¿Qué es esta aplicación?"
          titleStyle={styles.accTitle}
          style={styles.accBox}
        >
          <Text style={styles.text}>
            Esta aplicación es una biblioteca digital que permite consultar un
            catálogo de libros y visualizar estadísticas sobre su uso.
          </Text>
        </List.Accordion>

        <List.Accordion
          title="Cómo usar el menú inferior"
          titleStyle={styles.accTitle}
          style={styles.accBox}
        >
          <Text style={styles.text}>Las secciones disponibles son:</Text>
          <Text style={styles.bullet}>• Libros</Text>
          <Text style={styles.bullet}>• Informe de descargas</Text>
          <Text style={styles.bullet}>• Ayuda</Text>
        </List.Accordion>

        <List.Accordion
          title="Sección “Libros”"
          titleStyle={styles.accTitle}
          style={styles.accBox}
        >
          <Text style={styles.text}>
            Esta pantalla muestra la información básica del libro y permite
            navegar por el listado de forma sencilla y clara.
          </Text>
        </List.Accordion>

        <List.Accordion
          title="Sección “Descargas”"
          titleStyle={styles.accTitle}
          style={styles.accBox}
        >
          <Text style={styles.text}>En esta sección se muestra:</Text>
          <Text style={styles.bullet}>• El título de cada libro.</Text>
          <Text style={styles.bullet}>
            • El número total de descargas realizadas.
          </Text>
          <Text style={styles.text}>
            Esta vista permite comprender el uso real del catálogo.
          </Text>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#EBF4F6", padding: 20 },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#e21f50",
    marginBottom: 20,
  },
  accBox: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  accTitle: {
    fontWeight: "bold",
    color: "#e21f50",
  },
  bullet: {
    paddingHorizontal: 25,
    paddingBottom: 6,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  text: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    fontSize: 14,
    color: "#005461",
    lineHeight: 20,
  },

});