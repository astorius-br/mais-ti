import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

const [display, setDisplay] = useState('0');
const [previousValue, setPreviousValue] = useState(null);
const [operator, setOperator] = useState(null);

const handleNumber = (number) => {
  setDisplay(display === '0' ? number : display + number);
};

const handleOperator = (op) => {
  setOperator(op);
  setPreviousValue(display);
  setDisplay('0');
};

const Calculadora = () => {
    <SafeAreaView style={{ flex:1 }}>
        <ScrollView>
            <View style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 35,
            }}>
                <TouchableOpacity onPress={(() => handleOperator('C'))}>
                    <Text>C (Limpar)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('+/-'))}>
                    <Text>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('%'))}>
                    <Text>%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('='))}>
                    <Text>÷</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                borderColor: 'gray',
                borderWidth: 1,
            }}>
                <TouchableOpacity onPress={(() => handleNumber('7'))}>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('8'))}>
                    <Text>8</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('9'))}>
                    <Text>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('*'))}>
                    <Text>×</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                borderColor: 'gray',
                borderWidth: 1,
            }}>
                <TouchableOpacity onPress={(() => handleNumber('4'))}>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('5'))}>
                    <Text>5</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('6'))}>
                    <Text>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('-'))}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                borderColor: 'gray',
                borderWidth: 1,
            }}>
                <TouchableOpacity onPress={(() => handleNumber('1'))}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('2'))}>
                    <Text>2</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('3'))}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('+'))}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                borderColor: 'gray',
                borderWidth: 1,
            }}>
                <TouchableOpacity onPress={(() => handleNumber('0'))}>
                    <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleNumber('.'))}>
                    <Text>.</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('='))}>
                    <Text>=</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </SafeAreaView>
}
