import { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
  View
} from 'react-native';

const API_BASE = 'https://espacio199.com/biblioteca/api.php';

export default function Biblioteca() {
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarLista() {
      try {
        const res = await fetch(API_BASE);
        const json = await res.json();
        setLista(json);
      } catch (e) {
        setError('Error cargando la lista de librosaurios');
      } finally {
        setCargando(false);
      }
    }
    cargarLista();
  }, []);

  function manejarDescarga(libro) {
    if (Platform.OS === 'web') {
      const enlace = document.createElement('a');
      enlace.href = libro.archivo; // URL del PDF/EPUB
      enlace.download = `${libro.titulo}.pdf`;
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } else {
      alert('Descarga disponible solo en versión web (de momento)');
    }
  }

  if (cargando) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) return <Text style={{ padding: 20, color: 'red' }}>{error}</Text>;

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Librosaurios</Text>
      <Text style={styles.counter}>Total disponibles: {lista.length}</Text>

      {lista.map((libro) => (
        <TouchableOpacity
          key={libro.id_libro || libro.titulo}
          onPress={() => manejarDescarga(libro)}
          style={styles.item}
        >
          <View>
            <Text style={styles.itemTitle}>{libro.titulo}</Text>
            <Text style={styles.itemAutor}>{libro.autor}</Text>
          </View>
          <Text style={styles.downloadLabel}>Descargar ↓</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: '#EBF4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3D45AA',
  },
  counter: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemAutor: {
    fontSize: 14,
    color: '#777',
  },
  downloadLabel: {
    color: '#3D45AA',
    fontWeight: 'bold',
    fontSize: 12,
  }
});