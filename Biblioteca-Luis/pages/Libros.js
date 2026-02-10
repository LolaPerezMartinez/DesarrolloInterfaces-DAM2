import { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform
} from 'react-native';

const API_BASE = 'http://localhost:6060/api.php';

export default function Libros() {
  const styles = getStyles();

  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Cargar listado
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

  // Estados globales
  if (cargando) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  if (error) {
    return <Text style={{ padding: 20 }}>{error}</Text>;
  }

  // Listado
  function manejarDescarga(libro) {
  // WEB
  /*Platform.OS viene de react-native.
    Sirve para saber si estamos en web o en móvil.
    Esto es importante porque la descarga de archivos se maneja diferente en 
    web y móvil.
   */
  if (Platform.OS === 'web') {
    //Crea dinámicamente un enlace <a> en el DOM
    const enlace = document.createElement('a');

    //Le asigna la URL del archivo PDF que quieres descargar
    enlace.href = libro.archivo;           // URL del archivo

    //Esto indica el nombre que tendrá el archivo cuando se guarde en la máquina del usuario.
    enlace.download = `${libro.titulo}.pdf`;

    /*document.body.appendChild(enlace); -> Agrega el enlace al DOM.
      Es necesario para poder “simular” un clic sobre él.
     */
    document.body.appendChild(enlace);

    //Simula un clic en el enlace → el navegador inicia la descarga del archivo.
    /*
    .click() es un método nativo del DOM en JavaScript, que existe en cualquier elemento HTML.
    Sirve para simular que el usuario ha hecho clic en un elemento.
    En tu caso, enlace.click() hace que el navegador actúe como si el usuario 
    hubiese pulsado ese <a> y así inicia la descarga.
    */
    enlace.click();

    /*Quita el enlace del DOM, porque ya no se necesita.
      Así el DOM queda limpio.
     */
    document.body.removeChild(enlace);
  } 
  // MÓVIL (por ahora informativo)
  else {
    alert('Descarga disponible solo en versión web (de momento)');
  }
}

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Librosaurios</Text>
      <Text style={styles.counter}>{lista.length}</Text>

      {lista.map((libro) => (
        <TouchableOpacity
          key={libro.id_libro}
          onPress={() => manejarDescarga(libro)}
          style={styles.item}
        >
          <Text style={styles.itemTitle}>{libro.titulo}</Text>
          <Text>{libro.autor}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const getStyles = () =>
  StyleSheet.create({
    screen: {
      padding: 20,
    },

    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    counter: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    item: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#eee',
      borderRadius: 6,
    },

    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
