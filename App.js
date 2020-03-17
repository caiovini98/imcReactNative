import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [peso, setPeso]= useState('');
  const [altura, setAltura]= useState('');
  function handleSubmit() {
    let alt = altura/100;
    let imc = peso / (alt*alt);
    if (imc<18.6) {
      alert('Voce esta abaixo do peso. Seu imc é '+imc.toFixed(2));
    } else if (imc>= 18.6 && imc < 24.9) {
      alert('Peso ideal. Seu imc é '+imc.toFixed(2));
    } else if (imc>=24.9 && imc <34.9) {
      alert('Levemente acima do peso. Seu imc é '+imc.toFixed(2));
    }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
      style = {styles.input}
      placeholder = 'Digite sua altura em Metros'
      placeholderTextColor = '#FFF'
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      keyboardType ="numeric"
      />

      <TextInput
      style = {styles.input}
      placeholder = 'Digite seu peso em Kg'
      placeholderTextColor = '#FFF'
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      keyboardType ="numeric"
      />

      <TouchableOpacity style = {styles.button} onPress={handleSubmit}>
        <Text style = {styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  input: {
    backgroundColor: '#121212',
    fontSize: 23,
    padding: 10,
    color: '#FFF',
    margin: 16,
    borderRadius: 20
  },
  button: {
    alignItems: 'center',
    margin: 15,
    backgroundColor: "#41Aef4",
    padding: 10,
    justifyContent: 'center',
    borderRadius: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25
  }
});