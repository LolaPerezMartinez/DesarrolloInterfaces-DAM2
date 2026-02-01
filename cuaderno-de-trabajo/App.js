
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>

     <View style={estilos.caja}><text>Caja 1</text></View>
     <View style={estilos.caja}><text>Caja 2</text></View>
     <View style={estilos.caja}><text>Caja 3</text></View>
     
     <View style={estilos.caja}>
      <text>Miglita</text>
      <text>Linda</text>
      <text>Guapa</text>

     </View>
    </View>
  );
}

//Esto es un array de objetos en JS con clave, valor
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEB9E',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '10px',
  },
  caja:{
    backgroundColor: 'cyan',
    padding: '16px',
    borderRadius: '10px',
    color: '#000B58',


  }
});


