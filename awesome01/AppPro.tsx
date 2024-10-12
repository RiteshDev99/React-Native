import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native';


function AppPro() {
    const isLightMode = useColorScheme() === 'light';
    return (
        <View style={Styles.container}>
            <Text style={isLightMode ? Styles.DarkText : Styles.WhiteText}>
                Hello World!
            </Text>
        </View>
    );
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WhiteText: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 'bold',
    },
    DarkText: {
        color: '#000000',
        fontSize: 50,
        fontWeight: 'bold',
    },
});



export default AppPro;
