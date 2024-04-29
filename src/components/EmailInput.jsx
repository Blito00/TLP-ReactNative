import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';


const EmailInput = () => {

    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                mode="outlined"
                label="Correo"
                placeholder="correo@email.com"
                style={styles.input}
                outlineStyle={styles.outline}
            />
        </View>
    )
}


const styles = ScaledSheet.create({
    input: {
        width: '90%',
        borderRadius: 20,
        marginLeft: '15@ms',
        marginBottom: '10@ms'
    },
    outline: {
        borderRadius: 10
    }
});

export default EmailInput