import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const API_BASE = "http://localhost:6060/api.php";

export default function Biblioteca() {
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  // Cargar libros
  useEffect(() => {
    async function cargarLista() {
      try {
        const res = await fetch(API_BASE);
        const json = await res.json();
        setLista(json);
      } catch {
        setError("Error cargando la lista de libros");
      } finally {
        setCargando(false);
      }
    }
    cargarLista();
  }, []);

  const styles = getStyles();

  if (cargando) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) return <Text style={{ padding: 20 }}>{error}</Text>;

  // Si hay libro seleccionado, mostrar detalle
  if (libroSeleccionado) {
    return (
      <ScrollView style={styles.screen}>
        <TouchableOpacity onPress={() => setLibroSeleccionado(null)}>
          <Text style={styles.back}>← Volver</Text>
        </TouchableOpacity>

        <Text style={styles.detailTitle}>{libroSeleccionado.titulo}</Text>
        <Text style={styles.itemAutor}>{libroSeleccionado.autor}</Text>
        <Text style={{ marginTop: 10 }}>{libroSeleccionado.description}</Text>
      </ScrollView>
    );
  }
  //aqui va la funcion de Luis no funcionaaa
  function manejarDescarga(libro) {
  // WEB
  if (Platform.OS === 'web') {
    const enlace = document.createElement('a');
    enlace.href = libro.archivo;           // URL del archivo
    enlace.download = `${libro.titulo}.pdf`;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  }
  // MÓVIL (por ahora informativo)
  else {
    alert('Descarga disponible solo en versión web (de momento)');
  }
}

  // Mostrar lista de libros
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Biblioteca</Text>
      <View style={styles.container}>
        {lista.map((libro) => (
          <TouchableOpacity
            key={libro.id_name}
            style={styles.item}
            onPress={() => setLibroSeleccionado(libro)}
          >
            <Text style={styles.itemTitle}>{libro.titulo}</Text>
            <Text style={styles.itemAutor}>{libro.autor}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// Estilos
const getStyles = () =>
  StyleSheet.create({
    screen: {
      padding: 20,
      backgroundColor: '#BBDCE5'
    },

    title: {
      color: '#F63049',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    counter: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    container:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10
    },

    item: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#FFF19B',
      borderRadius: 6,
      width: '48%'
    },

    itemTitle: {
      color: '#F63049',
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemAutor:{
      color: '#ce5d5d',
    },
    back: {
      fontSize: 18,
      marginBottom: 20,
      color: 'yellow',

    },

    backText: {
      color: 'blue',
    },

    detailTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    description: {
      marginTop: 15,
    },

    region: {
      marginTop: 10,
    },

    footer: {
      flexDirection: "row", 
      justifyContent: "space-around", 
      alignItems: "center",
      height: 60, 
      backgroundColor: "#F63049", 
      position: "absolute", 
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 10,
    },

    footerButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    footerButtonText: {
      color: "#FFF7CD",
      fontWeight: "bold",
      fontSize: 16,
    },
   

  });