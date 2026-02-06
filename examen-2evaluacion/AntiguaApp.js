import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

//Ancho de pantalla para calcular el tamaño de las imágenes
const {width} = Dimensions.get('window');

//Enlace a API 
const API_BASE = "https://akabab.github.io/starwars-api/api/all.json";

export default function App() {
  //--Estados--
  const [personas, setHeroes] = useState([]);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [imgSize, setImgSize] = useState(null);

  
  //--Acceso asíncrono con fetch--
  //Es asíncrono porque se espera a recibir la informacion por ello ponemos await
  useEffect(() => {
    async function cargarPersonas() {
      try {
        setCargando(true);
        setError('');

        const res = await fetch(API_BASE);
        if (!res.ok) {
          throw new Error('Respuesta inválida del servidor');
        }

        const json = await res.json();
        setHeroes(json.results);
      } catch {
        setError('No se han podido cargar los datos. Inténtalo de nuevo.');
      } finally {
        setCargando(false);
      }
    }

    cargarPersonas();
  }, []);

 
  //Calculamos el tamaño de la imagen
  useEffect(() => {
    if (!personaSeleccionada?.image) return;

    Image.getSize(
      personaSeleccionada.image,
      (w, h) => {
        const ratio = width / w;
        setImgSize({
          width: width * 0.9,
          height: h * ratio * 0.9,
          alignSelf: 'center',
          marginVertical: 15,
        });
      },
      () => {
        // Tamaño por defecto si falla la imagen
        setImgSize({
          width: width * 0.9,
          height: width * 0.6,
          alignSelf: 'center',
          marginVertical: 15,
        });
      }
    );
  }, [personaSeleccionada]);


  //Mensajes de estado
   if (cargando) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
   }

  if (error) {
    return <Text style={{ padding: 20 }}>{error}</Text>;
  }

  //Listado de personas visualizado
  if (!personaSeleccionada) {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Actores</Text>

        <Text style={styles.info}>
          Selecciona un actor para ver más información
        </Text>

        {personas.map((persona) => (
          <TouchableOpacity
            key={persona.name}
            style={styles.item}
            onPress={() => setPersonaSeleccionada(persona)}
          >
            <Text style={styles.itemTitle}>{persona.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  
  //Detalle del actor visualizado
  return (
    <ScrollView style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          setPersonaSeleccionada(null);
          setImgSize(null);
        }}
        style={styles.back}
      >
        <Text style={styles.backText}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.detailTitle}>
        {personaSeleccionada.name}
      </Text>

      {imgSize && (
        <Image
          source={{uri: personaSeleccionada.image}}
          style={imgSize}
          resizeMode="contain"
        />
      )}

       <Text style={styles.description}>
        Altura: {personaSeleccionada.height} cm
      </Text>
      <Text style={styles.description}>
        Peso: {personaSeleccionada.mass} kg
      </Text>
      <Text style={styles.description}>
        Color de cabello: {personaSeleccionada.hair_color}
      </Text>
      <Text style={styles.description}>
        Color de ojos: {personaSeleccionada.eye_color}
      </Text>
      <Text style={styles.description}>
        Género: {personaSeleccionada.gender}
      </Text>
    </ScrollView>
  );
}

//Estilos
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    marginBottom: 15,
    color: '#555',
  },
  item: {
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  back: {
    marginBottom: 10,
  },
  backText: {
    color: '#007AFF',
    fontSize: 16,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});


