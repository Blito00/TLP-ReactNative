import React from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Text } from '@rneui/themed';
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Addons from '../components/Addons'


const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [checked, setChecked] = React.useState(false)

    return (
        <View style={styles.container}>
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
    container: {
        flex: 1,
        padding: '20@ms',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 245, 214, 0.1)',
    },
    title: {
        fontSize: 24,
        marginBottom: '20@ms',
        textAlign: 'center',
    },
    scrollContent: {
        top: '150@ms',
        flexGrow: 1,
        paddingBottom: '10@vs',
    },
})

export default Login