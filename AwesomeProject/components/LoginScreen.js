import React, { useState} from 'react'; 
import { ScrollView, Text, StyleSheet, TextInput, Button, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { encode } from 'react-native-base64';

export default function LoginScreen({ isLoggedIn, setIsLoggedIn, setToken }) {

 const [username, onChangeUsername] = useState(''); 
 const [password, onChangePassword] = useState(''); 
 const [error, setError] = useState('')
 const navigation = useNavigation();
 let base64 = require("base-64");

 const handleLogin = async () => {

  try {
    const response = await fetch('http://localhost:1010/api/login', {
      method: 'GET', // Use GET for basic auth
      headers: {
        Authorization: "Basic " + base64.encode(username + ":" + password),
      },
    });
    if (response.status === 200) {
      setIsLoggedIn(true);
      // const data = await response.json();
      // setToken(data.Authorization); // Store the token
      setToken({username , password})

    } else {
      setError('Login failed. Please check your credentials.');
      onChangeUsername('');
      onChangePassword('');
    }
  } catch (error) {
      console.error('Error:', error);
  }
};


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
        style={styles.input} 
        value={username} 
        onChangeText={onChangeUsername} 
        placeholder='username'

      /> 
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={onChangePassword} 
        placeholder='password'
        secureTextEntry={true}
      /> 
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#333333',
    textAlign: 'center',
  },
  input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#F4CE14', 
   }, 
   errorText: { 
    color: 'red',
    textAlign: 'center',
    padding: 30,
  },

});