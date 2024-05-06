import { Text, View, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React from 'react';
import Cards from './Cards';
import APIs from './APIs';


const Screen1 = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={true}>
                <Text style={styles.text}>Bienvenido a TLP 3</Text>
                <APIs />
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
        marginTop: '30@ms'
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