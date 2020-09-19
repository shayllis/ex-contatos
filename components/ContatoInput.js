import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome);
    };

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    };

    const addContato= () => {
        // Verifica caracteres válidos
        if (nome.replace(/\s+/g, '').length) {
            props.onAddContato({
                nome: nome,
                telefone: telefone
            });
        }
    };

    return (
        <View style={styles.reminderView}>
            <TextInput
                placeholder="Nome"
                style={styles.reminderTextInput}
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput
                placeholder="Telefone"
                style={styles.reminderTextInput}
                onChangeText={capturarTelefone}
                value={telefone}
            />
            <Button title="Adicionar" onPress={addContato}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reminderView: {
        marginBottom: 8
    },
    reminderTextInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 8,
        textAlign: 'center'
    }
})

export default ContatoInput;