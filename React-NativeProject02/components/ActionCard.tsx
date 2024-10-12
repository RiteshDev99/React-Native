import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={Styles.headingText} >Blog Card</Text>
            <View style={[Styles.card, Styles.ElevatedCard]}>
                <Text style={Styles.headText}>Explore The Images & Blogs</Text>
                <Image
                    source={{
                        uri: 'https://plus.unsplash.com/premium_photo-1697729831106-dbca67df36af?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1505977003557-c907eece08e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                    }}
                    style={Styles.cardImage}
                />
                <Text style={Styles.MoreAbout}>More About</Text>
                <View style={Styles.bodyContainer}>
                    <Text style={Styles.cardDescription}>Hawa Mahal famously known as the “
                        palace of winds “ has one of the best
                        architecture in Jaipur, Rajasthan. Maharaj
                        a Sawai Pratap Singh
                        built this palace in 1799.  Hawa Mahal is considered
                        to be unique as it has many small windows and
                        balconies that seem like a honeycomb.
                    </Text>
                    <View style={Styles.footerContainer} >
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => openWebsite('https://issuu.com/amritkirat/docs/hawa_mahal_documentation')}
                        >
                            <Text style={Styles.SocialMedia}>Read More...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => openWebsite('https://github.com/RiteshDev99')}
                        >
                            <Text style={Styles.SocialMedia}>Follow me...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 12,
        fontSize: 20,
        fontWeight: 'bold',
    },
    headText: {
        marginVertical: 14,
        marginHorizontal:10,
        fontWeight: 'bold',
        fontSize: 16,
        color:'black',
    },
    card: {
        width: 373,
        height: 510,
        margin: 15,
        borderRadius: 4,
    },
    MoreAbout: {
        marginVertical: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3335',
        marginHorizontal: 8,
    },
    ElevatedCard: {
        backgroundColor: '#EAF0F1',
    },
    cardImage: {
        height: '50%',
        width: '100%',
        marginBottom: 9,
    },
    bodyContainer: {},
    cardDescription: {
        color: '#2C3335',
        marginHorizontal: 8,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#333945',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 9,
        marginTop:5,
    },
    SocialMedia: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#EAF0F1',
        textAlign: 'center',
    },
});

export default ActionCard;
