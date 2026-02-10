import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// Importar los componentes
import Home from "./Paginas/Home";
import Biblioteca from "./Paginas/Biblioteca";
import Ayuda from "./Paginas/Ayuda";

export default function App() {
  const [seccion, setSeccion] = useState("home"); // 'home', 'biblioteca', 'ayuda'

  // Objeto de secciones para no usar switch
  const secciones = {
    home: <Home />,
    biblioteca: <Biblioteca />,
    ayuda: <Ayuda />,
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Sección activa */}
      {secciones[seccion] || <Home />}

      {/* Footer fijo */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => setSeccion("home")}>
          <Text style={styles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => setSeccion("biblioteca")}>
          <Text style={styles.footerButtonText}>Biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => setSeccion("ayuda")}>
          <Text style={styles.footerButtonText}>Ayuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#F63049",
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