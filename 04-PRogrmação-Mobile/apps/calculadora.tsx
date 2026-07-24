import {
    ScrollView, Text,
    TouchableOpacity,
    View, useState, handleOperator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const [contador, setContador] = useState(0);

const handleOperator = (op: string) => {
    setOperator(op);
    setPreviousValue(display);
    setDisplay('0');
  };


const Calculadora = () => {
    <SafeAreaView style={{ flex:1 }}>
        <ScrollView>
            <View>
                <TouchableOpacity onPress={(() => handleOperator(''))}>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator(''))}>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator(''))}>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => handleOperator('='))}>
                    <Text></Text>
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
                    <Text></Text>
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
                    <Text></Text>
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
                    <Text></Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </SafeAreaView>
}

export default Calculadora()
