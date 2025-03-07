import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState("");

  const handleSum = () => {
    const numberOne = parseFloat(num1);
    const numberTwo = parseFloat(num2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suma de dos numeros</Text>

      <TextInput
        value={num1}
        style={styles.input}
        placeholder='Teclea el primer valor'
        onChangeText={setNum1}
        keyboardType='numeric' 
      />

      <TextInput
        value={num2}
        style={styles.input}
        placeholder='Teclea el segundo valor'
        keyboardType="numeric"
        onChangeText={setNum2} 
      />
      

      <TouchableOpacity style={styles.btn} onPress={handleSum}>
        <Text style={styles.btnText}>Sumar</Text>
      </TouchableOpacity>
      
      <Text style={styles.resultText}>{result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#efefef',
    marginBottom: 10,
    paddingLeft: 10,
  },
  btn: {
    width: '50%',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#5956EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
