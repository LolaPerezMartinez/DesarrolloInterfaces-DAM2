import { useState } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
const  API_BASE = 'http://192.168.0.243:8087/api/index.php';

export default function App() {
  const [cargando, setCargando] = useState<Boolean>(false);
  const [lista, setLista] = useState([]);
  const [rioDetalle, setRioDEtalle] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const  API_BASE = 'http://192.168.0.243:8087/api/index.php';

  useEffect(()=>{
  async function cargarRios() {
  try {
    setCargando(true);
    const respuesta = await fetch(API_BASE);
    //hemos cogido los datos con respuesta y ahora los necesitamos en json
    const datos = await respuesta.json();
    setLista(datos);

    
  } catch (err) {
   setError(err.message);

  }finally{
    setCargando(false);
  }

}
cargarRios();
}, [])

if(cargando){
  return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
      <ActivityIndicator size ="large"/>
    </View>
  );
}
}

if(error){
   return (
    <View style={styles.container}>
      <Text>´{err}</Text>
      <ActivityIndicator size ="large"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
