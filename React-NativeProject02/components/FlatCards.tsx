import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const FlatCards = () => {
    return (
        <View>
            <Text style={Styles.headingText}>Flat Cards</Text>
            <View style={Styles.Container}>
                <View style={[Styles.card, Styles.cardOne]}>
                    <Image
                        source={{
                            uri:'https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF3YSUyMG1haGFsJTIwamFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.cardTwo]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1700019704809-d764d5ba2bc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.cardThree]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.cardFourth]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1668316430293-e7a3edd77f64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                        }}
                        style={Styles.image}
                    />
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
        objectFit:'cover',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '48%',
        marginVertical: 8,
        borderRadius: 6,
    },
    cardOne: {
        backgroundColor: '#f43f5e',
    },
    cardTwo: {
        backgroundColor: '#60a5fa',
    },
    cardThree: {
        backgroundColor: '#34d399',
    },
    cardFourth: {
        backgroundColor: '#fcd34d',
    },
});

export default FlatCards;
