import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native-web';

const AppBar = () => {
    return (
        <Appbar.Header style={styles.appbar}>
            <Appbar.Content title="Login" />
            <Appbar.Action icon="magnify" onPress={() => console.log('Buscar presionado')} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log('Mas opciones presionadas')} />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',
        height: '150@vs', // Ajustar la altura de la barra
        paddingHorizontal: 20, // Añadir relleno horizontal a la barra
        justifyContent: 'space-between', // Alinear los elementos horizontalmente con espacio entre ellos
        alignItems: 'center' // Alinear los elementos verticalmente al centro
    },
})

export default AppBar;