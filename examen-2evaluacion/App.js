import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

//Ancho de pantalla para calcular el tamaño de las imágenes
const { width } = Dimensions.get("window");
//Enlace a API
const API_BASE = "https://akabab.github.io/starwars-api/api/all.json";

export default function App() {
  //--Estados--
  
  //Cómo influyen en lo que se muestra en pantalla
  //Cómo ayudan al usuario a entender la aplicación
  //Estos estado realizan el acceso a la API a la vez que mantienen al usuario informado acerca de 
  // los estados de la petición

  //Personajes-> guarda la lista de personajes que obtenemos con fetch
  const [personajes, setPersonajes] = useState([]);

  //Personaje -> guarda un personaje seleccionado a traves del id
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  //Cargando -> guarda si la pagina se encuentra realizando la petición fetch
  const [cargando, setCargando] = useState(true);

  //Error -> guarda el error que queremos transmitir al usuario
  const [error, setError] = useState("");

  //imgSize -> guarda el tamaño de la imagen que obtenemos mediante Image.getSizes()
  const [imgSize, setImgSize] = useState(null);

  //Constante para estilos
  const styles = getStyles();

 //¿Por qué es asíncrona?
 //Es asíncrono porque la petición a la API tarda un poco en responder
 //Usamos await para esperar la respuesta sin que la app se quede congelada

  //¿Qué ocurre mientras se esperan los datos?
  // La aplicación sigue funcionando y el usuario puede interactuar o utilizar otras funciones

  //-- Acceso asíncrono con fetch --
  useEffect(() => {
    async function cargarPersonajes() {
      try {
        setCargando(true);
        setError("");

        //Se realiza la peticion a la API
        const res = await fetch(API_BASE); 
        //lanza una excepcion que será captura en catch
        if (!res.ok) throw new Error("Respuesta inválida del servidor");
        const json = await res.json();
        setPersonajes(json);
      } catch (e) {
        setError("No se han podido cargar los personajes. Intentalo de nuevo.");
      } finally {
        setCargando(false);
      }
    }

    cargarPersonajes();
  }, []);

  //Calculamos el tamaño de la imagen
  //SOLO calcula el tamaño y lo guarda en el estado imgSize
  useEffect(() => {
    if (!personajeSeleccionado?.image) return;

    Image.getSize(
      personajeSeleccionado.image,
      (w, h) => {
        const ratio = width / w;
        setImgSize({
          width: width * 0.4,
          height: h * ratio * 0.4,
          alignSelf: "center",
          marginVertical: 15,
        });
      },
      () => {
        // Tamaño por defecto si falla la imagen
        setImgSize({
          width: width * 0.4,
          height: width * 0.4,
          alignSelf: "center",
          marginVertical: 15,
        });
      }
    );
  }, [personajeSeleccionado]);

  //Mensajes de estados
  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Cargando personajes, espera un momento…</Text>
      </View>
    );
  }

  if (error) {
    return <Text style={{ padding: 20 }}>{error}</Text>;
  }

 //Listado de personajes visualizado
  if (!personajeSeleccionado) {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Personajes de Star Wars</Text>
        <Text style={styles.info}>
          Selecciona un personaje para ver más información
        </Text>

        {personajes.map((p) => (
           //TouchableOpacity -> Es un botón que reacciona al toque
          <TouchableOpacity
            key={p.id}
            style={styles.item}
            onPress={() => setPersonajeSeleccionado(p)}
          >
            <Text style={styles.itemTitle}>{p.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  //Detalle del personaje visualizado
  return (
    <ScrollView style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          setPersonajeSeleccionado(null);
          setImgSize(null);
        }}
        style={styles.back}
      >
        <Text style={styles.backText}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.detailTitle}>{personajeSeleccionado.name}</Text>

      {personajeSeleccionado.image && imgSize && (
        <Image
          source={{ uri: personajeSeleccionado.image }}
          style={imgSize}
          resizeMode="contain"
        />
      )}
     
      <View style={styles.contenedordescripcion}>
      <Text style={styles.description}>
      <Text style={styles.bold}>Altura:</Text> {personajeSeleccionado.height} m 
      </Text>

      <Text style={styles.description}>
      <Text style={styles.bold}>Peso:</Text> {personajeSeleccionado.mass} kg 
      </Text>

      <Text style={styles.description}>
      <Text style={styles.bold}>Color de pelo:</Text> {personajeSeleccionado.hairColor} 
      </Text>

      <Text style={styles.description}>
      <Text style={styles.bold}>Color de ojos:</Text> {personajeSeleccionado.eyeColor} 
      </Text>

      <Text style={styles.description}>
      <Text style={styles.bold}>Género:</Text> {personajeSeleccionado.gender} 
      </Text>

      <Text style={styles.description}>
      <Text style={styles.bold}>Mundo natal:</Text> {personajeSeleccionado.homeworld} 
      </Text>

      </View>
    </ScrollView>
  );
}

//Estilos
const getStyles = () =>
  //Pantalla
 StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'black',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center'
  },

  //Titulo
  title: {
    color:'#ffe81f',
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
    textAlign: 'center'
  },

  //Mensaje informativo inicial
  info: {
    color: "#eee",
    margin: 20,
    textAlign: 'center'
  },

  //Cajas que contiene el listado de personajes
  item: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
    cursor: 'pointer'
  },
  //Nombre del personaje
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  //Caja TouchableOpacity para volver atrás
  back: {
    marginBottom: 10,
  },

  //Texto TouchableOpacity para volver atrás
  backText: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 15,
  },

  //Tamaño de la imagen
  imgSize:{
    borderRadius: '20',
    margin: 30,
  },
  //Titulo del personaje
  detailTitle: {
    color:'#ffe81f',
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: 'center'
  },
  //Contenedor para la descripcion
  contenedordescripcion:{
    backgroundColor: '#ffe81f',
    color: '#eee',
    borderRadius: 20,
  },
  //Texto de la descripcion
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 5,
    textAlign: 'center',
    color: 'black',
  },
  //Negrita para los nombres descriptivos
  bold: {
    fontWeight: 'bold',
  },

  /*
  Siguiendo los principios de la gestalt:
  En la pagina inicial he utilizado un color distinto para el titulo para resaltar que pertenece a una seccion distinta
  que la lista que aparece a continuación.
  El texto informativo para seleccionar el personaje tambien es de color mas suave y mas pequeño para aportar información
  pero mostrar que su funcionalidad es más secundaria con respecto al titulo.
  El listado de los personajes siguen el principio de semejanza teniendo la misma forma y color.

  En los detalles de cada personaje
  -Volver: el botón aparece en un color distinto a los del resto de la página para destacar la funcionalidad.
  -Titulo: aparece en grande centrado en la imagen para que parezca que forma parte de la imagen pero de forma destacable.
  -Descripción: he decidido ponerla en un contenedor para que el usuario pueda identificar que se trata de un contenido
   similar siguiendo el principio de figura y fondo.

  
  */
});