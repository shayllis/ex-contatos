import React from 'react';
import Theme from '../constants/Theme';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

const HeaderBtn = (props) => {
    return (
        <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'black' : Theme.primary}
    />
    )
}

export default HeaderBtn;