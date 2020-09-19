import React, {useState} from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';

const ContactListScreen = (props) => {
    const [contatos, setContatos] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);

    const addContato = (contato) => {
      setContatos(contatos => {
        setContadorContatos(contadorContatos + 2);

        return [...contatos, {key: contadorContatos.toString(), value: contato}];
      });
    }

    const removeItem = (key) => {
      setContatos(contatos => {
        return contatos.filter((contatos) => {
          return contatos.key !== key;
        })
      });
    }

    return (
        <View style={styles.telaPrincipal}>
            <FlatList
                data={contatos}
                renderItem={(contatos) => (
                    <ReminderItem
                    contato={contatos.item.value}
                    chave={contatos.item.key}
                    onDelete={removeItem}
                    />
                )
            } />
        </View>
    )
}

ContactListScreen.navigationOptions = navData => {
    return {
        headerTitle: "Lista de contatos",
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add' }
                        onPress={() => {
                            navData.navigation.navigate('NewContact')
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
};

const styles = StyleSheet.create({
    telaPrincipal: {
        backgroundColor: '#fff',
        padding: 50
      },
});

export default ContactListScreen;