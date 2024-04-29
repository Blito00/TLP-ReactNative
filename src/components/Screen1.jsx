import { Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import Cards from './Cards';
import EmailInput from './EmailInput';

const Screen1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Incrementado!')
    })
    return (
        <View style={styles.container}>
            <AppBar />
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={false}>
                <Text style={styles.text}>Bienvenido a TLP 3</Text>
                <Cards />
            </ScrollView>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 245, 214, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: '30@s',
        marginLeft: '40@ms'
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
    },
});

export default Screen1;