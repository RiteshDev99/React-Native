import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

interface UserList {
    id: number;
    name: string;
    status: string;
    imageUrl: string;
}
const Contacts = () => {
    const Contact: UserList[] = [
        {
            id: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://pbs.twimg.com/profile_images/1724344976715468800/MasktpKz_400x400.jpg',
        },
        {
            id: 2,
            name: 'Harkirat Singh',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_400x400.jpg',
        },
        {
            id: 3,
            name: 'Aman Verma',
            status: 'Just an extra ordinary Student',
            imageUrl: 'https://pbs.twimg.com/profile_images/1700064481823592448/VmeSLI2M_400x400.jpg',
        },
        {
            id: 4,
            name: 'Ritesh Chaudhary',
            status: 'Just an extra ordinary Student',
            imageUrl: 'https://pbs.twimg.com/profile_images/1832529718630875136/wi64OjA2_400x400.jpg',
        },
        {
            id: 5,
            name: 'Kshitiz Pratap Singh',
            status: 'Just an extra ordinary Student',
            imageUrl: 'https://pbs.twimg.com/profile_images/1730675608211054592/qtU1bAfk_400x400.jpg',
        },

    ];
    return (
        <View style={[Styles.card, Styles.Elevated]}>
            <Text style={Styles.headingText}>Contacts List</Text>
            <ScrollView scrollEnabled={true} style={Styles.Container}>
                {Contact.map(({ id, name, status, imageUrl }) => (
                    <View key={id} style={Styles.users}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={Styles.userImage}
                        />
                        <View style={Styles.userDetails}>
                            <Text style={Styles.userName}>{name}</Text>
                            <Text style={Styles.userStatus}>{status}</Text>
                        </View>

                    </View>
                ))}
            </ScrollView>
        </View>

    );
};

const Styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 12,
        marginTop:6,
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    },
    card: {
        width: 373,
        height: 310,
        margin: 15,
        borderRadius: 4,
    },
    Elevated: {
        backgroundColor: '#2F363F',
    },
    Container: {
        paddingHorizontal: 13,

    },
    users: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        backgroundColor: '#8B78E6',
        padding: 4,
        borderRadius:5,

    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        marginRight: 15,
    },
    userName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize:16,
    },
    userStatus: {
        fontWeight: 'semibold',
        color:'#DAE0E2',
    },
    userDetails: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Contacts;
