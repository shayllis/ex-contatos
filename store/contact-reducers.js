import { ADD_CONTACT, DELETE_CONTACT } from "./contact-actions";
import Contact  from '../model/Contact';

const initialState = {
    contacts: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            const contact = new Contact(new Date().toString(), action.contactData.contactName, action.contactData.contactPhone, action.contactData.imageURI);

            return { contacts: state.contacts.concat(contact) };
        
        case DELETE_CONTACT:
            return {contacts: state.contacts.filter(contact => {
                return contact.id != action.contactData.id;
            })};
        default:
            return state;
    }
};