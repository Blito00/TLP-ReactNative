import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const PasswordInput = () => {

    const [password, setPassword] = useState('')

    return (
        <View>
            <TextInput
                label="Contraseña"
                placeholder='******'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
                outlineStyle={styles.outline}
                mode="outlined"
                right={<TextInput.Icon name="eye" />}
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

export default PasswordInput