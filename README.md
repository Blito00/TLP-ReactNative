![TLP](https://github.com/Blito00/TLP-ReactNative/blob/main/assets/img/expo_reactnative.png)
# Taller de Lenguaje de Programación 3 | React Native

Guia para inicializar un proyecto con React Native y Expo.

## Instalación:

Inicializar una terminal en el directorio deseado, y seguido paso utilizar el siguiente comando

```bash
 npx create-expo-app nombre-app
```

## Inicializar proyecto:

Deberemos posicionarnos en la carpeta del proyecto.

```bash
 cd ./nombre-app
```
Una vez dentro de la carpeta ejecutaremos el siguente comando:
```bash
 npm start
```

# Componentes basicos

### 1- View: 
Un componente contenedor que se utiliza para organizar otros componentes y controlar su diseño y estilo.
### 2- ScrollView: 
Un componente que proporciona una vista desplazable para mostrar una lista de elementos o contenido que no cabe completamente en la pantalla.
### 3- Text: 
Se utiliza para mostrar texto en la interfaz de usuario.
### 4- Button: 
Un componente que representa un botón interactivo que el usuario puede presionar para realizar una acción.
### 5- Image: 
Permite mostrar imágenes en la aplicación.
### 6- TextInput: 
Un componente que permite al usuario introducir texto mediante un teclado.
### 7- TouchableOpacity: 
Un componente que envuelve a otros componentes y añade la capacidad de responder a toques del usuario, proporcionando retroalimentación visual cuando se toca.

# React Native Navigation:

Para implementar la navegación entre pantallas en nuestra aplicación deberemos instalar las siguientes dependencias:

```bash
 npm install @react-navigation/native @react-navigation/native-stack
```
```bash
 npm install react-native-screens react-native-safe-area-context
```
Para visualizar su utilización, diriganse al codigo del repositorio.