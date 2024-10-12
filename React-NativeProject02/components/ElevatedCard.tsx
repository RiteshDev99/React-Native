import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
    return (
        <View>
            <Text style={Styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={Styles.Container}>
                <View style={[Styles.card, Styles.ElevatedCardOne]}>
                    <Image
                        source={{
                            uri:'https://images.unsplash.com/photo-1681052074768-08122f7654af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardTwo]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1662558046392-2d615c680542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                        }}
                      style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardThree]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1598623373118-657c744000b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxoYXdhJTIwbWFoYWwlMjBqYWlwdXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardFour]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1642993469336-6ed19a7ade57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxoYXdhJTIwbWFoYWwlMjBqYWlwdXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardFive]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1520312622401-cac590a0d473?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxoYXdhJTIwbWFoYWwlMjBqYWlwdXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardSix]}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxoYXdhJTIwbWFoYWwlMjBqYWlwdXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
                        }}
                        style={Styles.image}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Container: {
        padding: 8,
    },
    card: {
        height: 100,
        width: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 4,
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderRadius:4,
    },
    ElevatedCardOne: {
        backgroundColor: '#6366f1',
    },
    ElevatedCardTwo: {
        backgroundColor: '#a78bfa',
    },
    ElevatedCardThree: {
        backgroundColor: '#db2777',
    },
    ElevatedCardFour: {
        backgroundColor: '#fda4af',
    },
    ElevatedCardFive: {
        backgroundColor: '#0d9488',
    },
    ElevatedCardSix: {
        backgroundColor: '#64748b',
    },
});