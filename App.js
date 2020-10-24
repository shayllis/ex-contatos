import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import NavContacts from './navigation/NavContacts';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {init} from './helpers/db';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contactsReducers from './store/contact-reducers';

init()
  .then(() => {
    console.log('Okkk');
  })
  .catch(err => {
    console.log(`Not Ok ${err}`);
  });

const rootReducer = combineReducers({ 
  contacts: contactsReducers
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavContacts />
    </Provider>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    backgroundColor: '#fff',
    padding: 50
  },
  lembreteTxt: {
    borderBottomColor: '#000', borderBottomWidth: 2, marginBottom: 4, textAlign: 'center'
  },
  itemListaView: {
    padding: 12,
    backgroundColor: '#ddd',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  entradaView: {
    marginBottom: 8
  }
});
