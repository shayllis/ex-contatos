import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import NavContacts from './navigation/NavContacts';

// import ReminderItem from "./components/Reminderitem";
// import ContatoInput from "./components/ContatoInput";

export default function App() {
  return (
    <NavContacts />
  );
  // const [contatos, setContatos] = useState([]);
  // const [contadorContatos, setContadorContatos] = useState(10);

  // const adicionarContato = (contato) => {
  //   setContatos(contatos => {
  //     setContadorContatos(contadorContatos + 2);

  //     return [...contatos, {key: contadorContatos.toString(), value: contato}];
  //   });
  // }

  // const removeItem = (key) => {
  //   setContatos(contatos => {
  //     return contatos.filter((contatos) => {
  //       return contatos.key !== key;
  //     })
  //   });
  // }

  // return (
  //   <View style={styles.telaPrincipal}>
  //     <ContatoInput onAddContato={adicionarContato}/>

  //     <View>
  //       <FlatList
  //         data={contatos}
  //         renderItem={(contatos) => (
  //           <ReminderItem
  //             contato={contatos.item.value}
  //             chave={contatos.item.key}
  //             onDelete={removeItem}
  //           />
  //         )
  //       } />
  //     </View>  
  //   </View>
  // );
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
