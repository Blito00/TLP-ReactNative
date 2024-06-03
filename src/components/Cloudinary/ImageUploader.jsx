import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import * as ImagePicker from 'expo-image-picker'; // Importa las funcionalidades del selector de imágenes de Expo
import UploadToCloudinary from './UploadToCloudinary'; // Importa la función personalizada para subir imágenes a Cloudinary

const ImageUploader = () => {
    // Estado para guardar la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(null);

    // Función asincrónica para abrir la galería de imágenes y seleccionar una
    const pickImage = async () => {
        // Abre la galería de imágenes y espera la selección del usuario
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, // Solo permite seleccionar imágenes
            //allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result); // Imprime el resultado en la consola para depuración

        // Si el usuario no cancela la selección
        if (!result.canceled) {
            // Guarda la URI de la imagen seleccionada en el estado
            setSelectedImage(result.assets[0].uri);
            // Llama a la función para subir la imagen a Cloudinary
            uploadImage(result.assets[0].uri);
        }
    };

    // Función asincrónica para subir la imagen a Cloudinary
    const uploadImage = async (imageUri) => {
        // Llama a la función importada para subir la imagen y espera la URL de la imagen subida
        const uploadedImageUrl = await UploadToCloudinary(imageUri);
        if (uploadedImageUrl) {
            console.log('Imagen subida a Cloudinary:', uploadedImageUrl); // Imprime la URL de la imagen subida
        }
        else { err } {
            console.log('Error al subir la imagen:', err); // Imprime el error en la consola
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Seleccionar Imagen" onPress={pickImage} />
            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.image} />
            )}
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10@s',
    },
    image: {
        width: '300@s',
        height: '55%',
        marginTop: '20@s',
        borderRadius: '10@s',
    },
});

export default ImageUploader; // Exporta el componente ImageUploader como el valor por defecto del módulo
