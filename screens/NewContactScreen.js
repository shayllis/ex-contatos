import React, {useState} from 'react';
import { View, TextInput, StyleSheet, OpaqueColorValue, Button, AsyncStorage } from 'react-native';
import Theme from '../constants/Theme';

const NewContactScreen = (props, navigation) => {
    console.log(props);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const captureName = (name) => {
        setName(name);
    };

    const capturarPhone = (phone) => {
        setPhone(phone);
    };

    const addContact = () => {
        // if (name.length && phone.length) {
            // await AsyncStorage.setItem('contact', name);
            // await AsyncStorage.setItem('contact', {
            //     name: name,
            //     phone: phone
            // });
            navigation.state.params.callback(name)
            navigation.goBack();
        // }
    };

    return (
        <View style={styles.mainView}>
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