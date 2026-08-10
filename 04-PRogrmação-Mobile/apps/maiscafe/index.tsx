import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
// import {'bemvindo.png'} from './'

export default function Index() {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.saview}>
      <View style={styles.view}>
        <Text style={styles.cafe}>+Café          </Text>
        <TouchableOpacity style={styles.buttonLight}>
        Acesso</TouchableOpacity>
      </View>

      <View style={{flex: 1, flexDirection: 'column',}}>
        <Text style={{fontWeight: '900', fontSize: 25, color: '#1F2937',}}>
          Login</Text>
        <Text style={{color: '#64748B'}}>Acesso segue por perfil</Text>
        
        <View style={{backgroundImage: './bemvindo.png'}}></View>
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
        placeholder='E-mail'
        onChangeText={onChangeText}
        value={text} />

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
// menu inferior
<View style={styles.view}>

</View>

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXPvakvEkky7c0nENwWocn2CTZJxjan0gWkKLaHyvyQcLfBbSOEE0WOE&s=10
