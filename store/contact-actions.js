
import { insertContact, searchContacts, excludeContact } from '../helpers/db';
import * as FileSystem from 'expo-file-system';
export const ADD_CONTACT = 'ADD_CONTACT';
export const LIST_CONTACTS = 'LIST_CONTACTS';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contactName, contactPhone, imageURI, lat, lng) => {

    return async dispatch => {
        const fileName = imageURI.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        const now = Math.floor(Date.now() / 1000);

        try {
            await FileSystem.moveAsync({
                from: imageURI,
                to: newPath
            });

            const result = await insertContact(contactName, contactPhone, newPath, lat, lng, now);

            dispatch({
                type: ADD_CONTACT,
                contactData: {
                    contactName: contactName,
                    contactPhone: contactPhone,
                    imageURI: imageURI,
                    lat: lat,
                    lng: lng,
                    created_at: now
                }
            });
        }
        catch(e) {

        }
    }
};

export const listContacts= () => {
    return async dispatch => {
        try {
            const result = await searchContacts();
            dispatch({ type: LIST_CONTACTS, contacts:  result.rows._array || [] });
        }
        catch (e) {
            console.log('??');
            console.log(e);
            throw e;
        }
    }
};


export const deleteContact = (id) => {
    return async dispatch => {
        try {
            const result = await excludeContact(id);
            dispatch({ type: DELETE_CONTACT, contactData: {id: id} });
        }
        catch (e) {
            throw e;
        }
    }
}
