import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState(''); 
}

export default function Index() {
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 600,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#000000',
        margin: 30,
        padding: 20,
      }}>
    <View /*topo logo + login */ 
    style={{
      width: 600,
      height: 70,
      borderWidth: 5,
      justifyContent: 'space-between',
    }}>
      <Text>+Café
      </Text>
      <TouchableOpacity style={styles.buttonColor}>
      Acesso</TouchableOpacity>
      
      <Text>Login</Text>
      <Text>Acesso segue por perfil</Text>
      
      <Text></Text>
      <Text></Text>
      
    </View>

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',

    }}>
      <Text>Bem-vindo ao +Café</Text>
      <Text>Entre com seu e-mail e senha</Text>
      <TextInput style={styles.input}
      onChangeText={onchange}/>

      <TouchableOpacity style={
        styles.buttonColor}>
        <Text style={{color: 'white'}}>Entrar</Text>
        </TouchableOpacity>
    </View>

    <View></View>
    <View></View>
    </SafeAreaView>
  );
}

<View style={{
        flex: 1,
        justifyContent: 'space-between',
        margin: 2,
      }} ></View>
  

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 2,
    padding: 5,
    backgroundColor: '#FBF7F2', //creme
  },

  buttonColor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#6F4E37',
  },

  input: {
    width: 200,
    height: 25,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#6F4E37',
    padding: 5,
  },
})
