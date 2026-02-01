import { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const API_BASE = 'https://dinoapi.brunosouzadev.com/api/dinosaurs';
const { width } = Dimensions.get('window');

export default function App() {
  const styles = getStyles();

  const [imgSize, setImgSize] = useState(null);
  const [lista, setLista] = useState([]);
  const [dinoSeleccionado, setDinoSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Cargar listado
  useEffect(() => {
    async function cargarLista() {
      try {
        const res = await fetch(API_BASE); //devuelve cuerpo de la respuesta (body), que normalmente es texto JSON
        const json = await res.json();
        setLista(json);
      } catch {
        setError('Error cargando la lista de dinosaurios');
      } finally {
        setCargando(false);
      }
    }

    cargarLista();
  }, []);

  // Calcular tamaño real de la imagen
  //SOLO calcula el tamaño y lo guarda en el estado imgSize
  // 1. CALCULAR el tamaño de la imagen
  useEffect(() => {
    if (!dinoSeleccionado?.image) return;

    Image.getSize(
      dinoSeleccionado.image,//aqui va la url de la imagen
      (w, h) => {//Esto es una funcion de React Native que pasa por defecto el ancho y luego la altura
        //si ponemos (a,b) -> a será el ancho y b la altura
        console.log("Tamaño real:", w, h); // éxito: React Native devuelve las medidas originales. Aquí decides el tamaño en pantalla
        const ratio = width / w;
        setImgSize({
          width: width * 0.9,
          height: h * ratio * 0.9,
          alignSelf: 'center',
          marginVertical: 15,
        });
      },
      () => {
        console.log("Error al cargar la imagen"); // Aquí decides un tamaño por defecto
        setImgSize({
          width: width * 0.9,
          height: width * 0.6,
          alignSelf: 'center',
          marginVertical: 15,
        });
      }
    );
    //MUY IMPORTANTE: 
    // SI DEJAMOS ESPACIO EN BLANCO EN [dinoSeleccionado] -> PROVOCA BUCLE INFINITO 
    // SI PONEMOS [] -> Solo se ejecutaría una vez al montar el componente. Mediría la imagen del primer dinosaurio
   //                   Al cambiar de dinosaurio… ❌ NO recalcularía el tamaño
  }, [dinoSeleccionado]);//Ejecuta este efecto solo cuando cambie dinoSeleccionado

  // Cargar detalle
  async function cargarDino(name) {
    try {
      setCargando(true);
      const res = await fetch(`${API_BASE}/${name}`);
      const json = await res.json();
      setDinoSeleccionado(json[0]);
    } catch {
      setError('Error cargando el dinosaurio');
    } finally {
      setCargando(false);
    }
  }

  // Estados globales
  if (cargando) {
    //ActivityIndicator -> es un spinner animado (una especie de rueda que gira) que dice al usuario: “espera, estamos procesando algo”
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }
  //Otro modo -> {cargando && <ActivityIndicator size="large" color="blue" />}


  if (error) {
    return <Text style={{ padding: 20 }}>{error}</Text>;
  }
  //Otro modo -> {error && <Text style={{ padding: 20 }}>{error}</Text>}


  // Listado
  if (!dinoSeleccionado) {
    //“si no hay ningún dinosaurio seleccionado”
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Dinosaurios</Text>
        <Text style={styles.counter}>{lista.length}</Text>

        {lista.map((dino) => (
          //TouchableOpacity -> Es un botón que reacciona al toque.
          <TouchableOpacity
            key={dino.name}
            onPress={() => cargarDino(dino.name)}//cuando tocas el dinosaurio, se llama a cargarDino con el nombre del dino seleccionado.
            style={styles.item}
          >
            <Text style={styles.itemTitle}>{dino.name}</Text>
            <Text>{dino.period}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  // Detalle
  return (
    <ScrollView style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          setDinoSeleccionado(null);//al poner dinoSeleccionado a null, la UI vuelve automáticamente a la lista de dinosaurios. 🔄
          setImgSize(null);
          /*imgSize es el estado que almacena el tamaño calculado de la imagen del dinosaurio.
          Si no lo ponemos en null, la próxima vez que selecciones otro dinosaurio, podría 
          heredar el tamaño anterior de la imagen. */
        }}
        style={styles.back}
      >
        <Text style={styles.backText}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.detailTitle}>
        {dinoSeleccionado.name}
      </Text>

      {imgSize && (
        <Image
        //2. DECIDIR CUÁNDO renderizarla
          source={{ uri: dinoSeleccionado.image }}
          style={imgSize}
          resizeMode="contain"
        />
      )}

      <Text style={styles.description}>
        {dinoSeleccionado.description}
      </Text>

      <Text style={styles.region}>
        Región: {dinoSeleccionado.region}
      </Text>
    </ScrollView>
  );
}

// 🎨 Función de estilos
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

    back: {
      marginBottom: 20,
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
   
  });




















/*
--CÓDIGO MIO--
import { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const API_BASE = ' https://dinoapi.brunosouzadev.com/api/dinosaurs';
const {width: ancho, height: alto} = Dimensions.get('window');

export default function App() {
  const [lista, setLista] = useState([]);
  const [dinoSeleccionado, setDinoSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 1️ Cargar lista dinos
  useEffect(() => {
    async function cargarLista() {
      try {
        const res = await fetch(API_BASE);
        const json = await res.json();
        setLista(json);
      } catch (err) {
        setError('Error cargando la lista de dinosaurios');
      } finally {
        setCargando(false);
      }
    }

    cargarLista();
  }, []);

  // Aquí estamos cagando un dino por su ID
  async function cargarDino(name) {
    try {
      setCargando(true);
      const res = await fetch(`${API_BASE}/${name}`);
      //En json estamos metiendo todos los dinos
      const json = await res.json();
      setDinoSeleccionado(json[0]); // la API devuelve array
    } catch (err) {
      setError('Error cargando el dinosaurio');
    } finally {
      setCargando(false);
    }
  }

  // Estados generales
  if (cargando) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  if (error) {
    return <Text style={{ padding: 20 }}>{error}</Text>;
  }

  // Mostramos el listado. Los estilos están en línea. Os pido, querido  alumnado que lo apliquéis
  if (!dinoSeleccionado) {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
          Dinosaurios del mundo
        </Text>

        {lista.map((dino) => (
          <TouchableOpacity
            key={dino.name}
            onPress={() => cargarDino(dino.name)}
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: '#eee',
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {dino.name}
            </Text>

            <Text>{dino.period}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  // Aquí mostramos el detalle de cada río
  return (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity
        onPress={() => setDinoSeleccionado(null)}
        style={{ marginBottom: 20 }}
      >
        {/* Esta es la opcion de navegacion
        TouchableOpacity para poder clickar
        *//*}
        <Text style={{ color: 'blue' }}>← Volver</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
        Nombre: {dinoSeleccionado.name}
      </Text>
      <Image
        source={{ uri: dinoSeleccionado.image}}
        style={{width:ancho, height:alto, borderRadius: 20}}
        resizeMode="contain"
      />


      <Text style={{ marginBottom: 10}}>
        Periodo: {dinoSeleccionado.period}
      </Text>

      <Text style={{ marginBottom: 10}}>
        Altura: {dinoSeleccionado.length}
      </Text>


      <Text style={{ marginTop: 20}}>
        Descripción: {dinoSeleccionado.description}
      </Text>
    </ScrollView>
  );
}*/