import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Alert, OpaqueColorValue, Button, ActivityIndicator } from 'react-native';
import Theme from '../constants/Theme';
import CaptureImage from '../components/CaptureImage';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useDispatch } from 'react-redux';
import * as contactActions from '../store/contact-actions';

const NewContactScreen = (props) => {
    const dispatch = useDispatch();
    

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [imageURI, setImageURI] = useState();
    const [location, setLocation] = useState(undefined);

    const captureName = (name) => {
        setName(name);
    };

    const getPermission = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);

        if (result.status !== 'granted') {
            Alert.alert(
                'Sem permissão para uso do mecanismo de localização',
                'É preciso liberar acesso ao mecanismo de localização',
                [{ text: 'OK' }]
            );

            return false;
        }

        return true;
    };
    
    const captureLocation = async () => {
        if (!getPermission())
            return ;

        try {
            const result = await Location.getCurrentPositionAsync({timeout: 8000});
            setLocation({
                lat: result.coords.latitude,
                lng: result.coords.longitude,
            });
        }
        catch(e){
            Alert.alert(
                'Impossível obter localização.',
                'Verifique o status do GPS de seu aparelho.',
                [{text: 'OK'}]
            );
        }
    };
    const capturarPhone = (phone) => {
        setPhone(phone);
    };

    const addContact = () => {
        setLoading(true);
        
        captureLocation()
            .then(r => {
                setLoading(false);
                if (!location){
                    Alert.alert(
                        'Impossível obter localização.',
                        'Verifique o status do GPS de seu aparelho.',
                        [{text: 'OK'}]
                    );
                    return ;
                }

                setLoading(true);
                dispatch(contactActions.addContact(name, phone, imageURI, location.lat, location.lng));
                dispatch(contactActions.addContact(name, phone, imageURI, 10, 10));

                setName('');
                setPhone('');
                setLocation(undefined);

                setLoading(false);
                props.navigation.goBack();
            })
            .catch(e => {
                setLoading(false); 
            });
        
    };

    const pictureTaken = image => {
        setImageURI(image);
    }

    captureLocation();
    
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
            {
                loading ?
                <ActivityIndicator
                    size="large"
                    collor={Theme.primary}
                /> :
                <Button title='Adicionar' style={styles.addButton} onPress={addContact}/>
            }
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