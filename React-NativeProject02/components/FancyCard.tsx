import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FancyCard = () => {
    return (
        <View>
            <Text style={Styles.headingText}>Treading Place</Text>
            <View style={[Styles.card, Styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                    style={Styles.cardImage}
                />
                <View style={Styles.cardBody}>
                    <Text style={Styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={Styles.cardLabel}>Pink City Jaipur</Text>
                    <Text style={Styles.description}>The Hawa Mahal is a palace in the city of Jaipur,
                        Rajasthan, India. Built from red and pink
                        sandstone, it is on the edge of the City Palace,
                        Jaipur.</Text>
                    <Text style={Styles.cardFooter}>12 minute away</Text>

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
    card: {
        width: 373,
        height: 360,
        margin: 15,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    cardElevated: {
        backgroundColor: '#EAF0F1',
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginBottom: 9,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        alignItems:'center',
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
        color:'#2C3335',
    },
    cardLabel: {
        fontWeight:'semibold',
        fontSize: 20,
        marginBottom: 6,
        marginTop: 8,
        color: '#2C3335',


    },
    description: {
        fontSize: 13,
        marginBottom: 10,
        marginTop: 6,
        color: '#2C3335',
        paddingHorizontal:8,
    },
    cardFooter: {
        marginTop: 9,
        color:'black',
    },
});
export default FancyCard;
