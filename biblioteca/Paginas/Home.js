import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';



const {width: ancho, height: alto} = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tu Biblioteca</Text>
      <Image source={require('../assets/img/Biblioteca.jpeg')} style={styles.img}/>
      <Text style={styles.slogan}>
        Un lugar tranquilo para guardar y descubrir historias
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF19B', 
    padding: 20
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    fontWeight: '600',
    color: '#F63049',
    margin: 20
  },
  slogan: {
    fontSize: 18,
    color: '#ce5d5d',
    textAlign: 'center',
    lineHeight: 22,
    margin: 20
  },
  img:{
     width: ancho * 0.50,
     height: alto * 0.50,
    
  }
});
