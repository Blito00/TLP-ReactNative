import React, { useState } from 'react';
import { View, } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Button, Checkbox, Text } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons';

const Addons = () => {

    const [checked, setChecked] = useState(false)

    return (
        <View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked)
                    }}
                />
                <Text style={styles.checkboxLabel}>Recordarme</Text>
            </View>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
            <Button
                onPress={() => navigation.navigate('login')}
                icon={
                    <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                }
                buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                title={'Registarse'}
            />
            <View style={styles.addonsContainer}>
                <Text style={styles.signupText}>
                    ¿No tienes una cuenta? <Text style={styles.signupLink}>Registrate</Text>
                </Text>
                <Button icon="google" mode="outlined" onPress={() => console.log('Iniciar con Google')}>
                    Iniciar con Google
                </Button>
                <Button icon="apple" mode="outlined" onPress={() => console.log('Iniciar con Apple')}>
                    Iniciar con Apple
                </Button>
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10@vs',
    },
    checkboxLabel: {
        marginLeft: '8@s',
    },
    forgotPassword: {
        textAlign: 'right',
        marginBottom: '20@vs',
    },
    signupText: {
        textAlign: 'center',
        marginVertical: '20@vs',
    },
    signupLink: {
        fontWeight: 'bold',
    },
    addonsContainer: {
        marginTop: '-50@ms'
    }
});

export default Addons