import { ADD_CONTACT, LIST_CONTACTS, DELETE_CONTACT } from "./contact-actions";
import Contact  from '../model/Contact';

const initialState = {
    contacts: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            const contact = new Contact(
                new Date().toString(),
                action.contactData.contactName,
                action.contactData.contactPhone,
                action.contactData.imageURI,
                action.contactData.lat,
                action.contactData.lng
            );

            return { contacts: state.contacts.concat(contact) };
        
        case DELETE_CONTACT:
            return {contacts: state.contacts.filter(contact => {
                return contact.id != action.contactData.id;
            })};
        
        case LIST_CONTACTS:
            return {
                contacts: action.contacts.map(contact => {
                    return new Contact(contact.id.toString(), contact.name, contact.phone, contact.imageURI);
                })
            }
        default:
            return state;
    }
};