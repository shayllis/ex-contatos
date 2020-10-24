import React, {useEffect} from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';
import { useSelector } from 'react-redux';
import ContactItem from '../components/ContactItem';
import * as contactActions from '../store/contact-actions';
import { useDispatch } from 'react-redux';

const ContactListScreen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( (contactActions.listContacts()) );
    });

    const contacts = useSelector(state => state.contacts.contacts );

    const removeItem = id => {
      dispatch(contactActions.deleteContact(id));
    }

    return (
        <View style={styles.telaPrincipal}>
            <FlatList
                data={contacts}
                keyExtractor={contacts => contacts.id}
                renderItem={(contact) => (
                    <ContactItem
                    id={contact.item.id}
                        image={contact.item.imageURI}
                        name={contact.item.name}
                        phone={contact.item.phone}
                        onRemoveItem={removeItem}
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