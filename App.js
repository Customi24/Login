import React, {useState} from 'react';
import { TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';

const InputContent = ({placeholder, keyboardType,
  multiline, maxLength, value, onChangeText, secureTextEntry}) => {
   return (
     <TextInput
       style={styles.input}
       placeholder={placeholder}
       placeholderTextColor="#B9B9B9"
       keyboardType={keyboardType}
       multiline={false}
       maxLength={maxLength}
       value={value}
       onChangeText={onChangeText}
       secureTextEntry={secureTextEntry}
     />
   );

  }

  const ButtonContent = ({ onPress }) => {
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title='Login' color='#FF7F21' />
      </View>
    );
  }

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    expediente.length === 6 && password.length >= 8
      ? Alert.alert('Inicio de sesión Exitoso')
      : Alert.alert('Los datos ingresados son incorrectos');

  }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <InputContent 
              placeholder='Expediente...'
              keyboardType='numeric'
              maxLength={6}
              value={expediente}
              onChangeText={setExpediente}
            />
            <InputContent
              placeholder='Password...'
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          
          <ButtonContent onPress={handleSubmit}/>
          
      </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#494949',
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center', 
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white', 
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 5, 
  },
});


export default App;