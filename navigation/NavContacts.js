import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContactListScreen from "../screens/ContactListScreen";
import NewContactScreen from "../screens/NewContactScreen";
import { Platform } from "react-native";
import Theme from "../constants/Theme";


// react-navigation


const NavContacts = createStackNavigator({
    ContactList: ContactListScreen,
    NewContact: NewContactScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backGroundColor: Platform.OS === 'android' ? 'white' : Theme.primary
        },
        headerTintColor: Theme.primary
    }
});

export default createAppContainer (NavContacts);