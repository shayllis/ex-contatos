import React from 'react';
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Theme from '../constants/Theme';
import { useState } from 'react';

const CaptureImage = (props) => {
    const [imageURI, setImageURI] = useState();

    const takePicture = async () => {
        const photo = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });

        setImageURI(photo.uri);
        props.onPictureTaken(photo.uri);
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.imagePreview}>
                {
                    imageURI ?
                        <Image
                            style={styles.image}
                            source={{uri: imageURI}}
                        />
                    :
                        <Text>Nenhuma foto</Text>
                }
            </View>
            <Button
                title="Tirar foto"
                color={Theme.primary}
                onPress={takePicture}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    button: {
        backgroundColor: Theme.primary,
        color: Theme.secondary,
        width: '100%',
    }
});

export default CaptureImage;