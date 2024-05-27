import React from 'react'
import { View } from 'react-native'
import ImageUploader from '../components/Cloudinary/ImageUploader'
import { ScaledSheet } from 'react-native-size-matters';



const Register = () => {
    return (
        <View style={styles.container}>
            <ImageUploader />
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register