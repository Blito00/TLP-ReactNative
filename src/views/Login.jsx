import React from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Text } from '@rneui/themed';
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Addons from '../components/Addons'
import { Appbar } from 'react-native-paper';
import AppBar from '../components/AppBar';


const Login = () => {
    return (

        <View >
            <AppBar />
            <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <EmailInput />
                <PasswordInput />
                <Addons />
            </ScrollView>

        </View>
    )
}

const styles = ScaledSheet.create({

    title: {
        fontSize: 24,
        marginBottom: '20@ms',
        textAlign: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
        marginTop: '100@ms',
        padding: 20,
    },
})

export default Login