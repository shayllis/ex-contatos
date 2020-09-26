import React, {useState} from 'react';
import { View, TextInput, StyleSheet, OpaqueColorValue, Button, AsyncStorage } from 'react-native';
import Theme from '../constants/Theme';
import CaptureImage from '../components/CaptureImage';
import { useDispatch } from 'react-redux';
import * as contactActions from '../store/contact-actions';

const NewContactScreen = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [imageURI, setImageURI] = useState();

    const captureName = (name) => {
        setName(name);
    };

    const capturarPhone = (phone) => {
        setPhone(phone);
    };

    const addContact = () => {
        dispatch(contactActions.addContact(name, phone, imageURI));

        setName('');
        setPhone('');

        props.navigation.goBack();

        props.navigation.goBack();
    };

    const pictureTaken = image => {
        setImageURI(image);
    }

    return (
        <View style={styles.mainView}>
            <CaptureImage
                onPictureTaken={pictureTaken}
            />
            <TextInput
                placeholder='Nome'
                style={styles.textInput}
                onChangeText={captureName}
            />
            <TextInput
                placeholder='Telefone'
                style={styles.textInput}
                onChangeText={capturarPhone}
            />
            <Button title='Adicionar' style={styles.addButton} onPress={addContact}/>
        </View>
    );
};

NewContactScreen.navigationOptions = navData => {
    return {
        headerTitle: "Novo contato"
    }
};

const styles = StyleSheet.create({
    mainView: {
        margin: 30,
    },
    textInput: {
        color: Theme.primary,
        borderBottomColor: Theme.primary,
        borderBottomWidth: 1,
        height: 45,
        marginBottom: 15,
        textAlign: 'center'
    },
    addButton: {
        backgroundColor: Theme.primary,
        color: Theme.secondary,
        paddingTop: 15,
        paddingBottom: 15,
    }
});

export default NewContactScreen;