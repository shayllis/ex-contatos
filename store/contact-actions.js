export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contactName, contactPhone, imageURI) => {
    return {
        type: ADD_CONTACT,
        contactData: {contactName: contactName, contactPhone: contactPhone, imageURI: imageURI}
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        contactData: {id: id}
    }
}