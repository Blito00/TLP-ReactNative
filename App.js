import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Incrementado!')
  })
  return (
    <View style={styles.container}>
      <ScrollView 
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.scrollContent}
        scrollEnabled={false}>
        <Text style={styles.text}>Bienvenido a TLP 3</Text>
        <Image source={require('./src/assets/img/expo_reactnative.png')} style={styles.img}/>
      <View style={styles.button}>
        <Button
          color="green"
          title='Aceptar'/>
      </View>
      <View style={styles.button2}>
        <Button
          color={'red'}
          title='Cancelar'/>
      </View>
      <View style={styles.button3}>
        <Button
          title={`Increment ${count}`}
          onPress={() => {
        setCount(count + 1)
          }}
          />
      </View>
      <StatusBar style="ligth" />
      <TextInput
      style={styles.textinput}
      placeholder=' Introduce texto'/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafad4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
  },
  img: {
    width: 400,
    resizeMode: 'contain',
    backgroundColor: '#f7f6ed',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3
  },
  button: {
    width: 150,
    marginLeft: 120,
    marginTop: 10,
    marginBottom: 10,
    
  },
  button2: {
    width: 150,
    marginLeft: 120,
    marginBottom: 10
  },
  button3: {
    width: 150,
    marginLeft: 120,
  },
  textinput: {
    backgroundColor: '#FFFF',
    width: 200,
    height:40,
    borderRadius: 10,
    marginLeft: 100,
    marginTop: 20
  },
  scrollContent: {
        marginTop: 100,
        flexGrow: 1,
        paddingBottom: 10, // Adjust this value as needed
    },
});