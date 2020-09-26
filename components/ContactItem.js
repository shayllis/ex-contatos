import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Contact from '../model/Contact';

const ContactItem = (props) => {
    return (
        <TouchableOpacity style={styles.mainView} onLongPress={() => {props.onRemoveItem(props.id)}}>
            <Image
                style={styles.photo}
                source={{uri: props.image }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.contactName}>{props.name}</Text>
                <Text style={styles.contactPhone}>{props.phone}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    photo: {
        width: 70,
        height: 70,
        backgroundColor: '#ccc',
        borderRadius: '50%'
    },
    infoContainer: {
        marginLeft: 30,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    contactName: {
        color: '#000',
        fontSize: 18,
        marginBottom: 10,
    },
    contactPhone: {
        color: '#555',
        fontSize: 14,
    }
});

export default ContactItem;