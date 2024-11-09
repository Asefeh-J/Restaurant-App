import React from 'react';
import { ScrollView, Image, StyleSheet, Text, useColorScheme, Pressable } from 'react-native';

const Welcome = ({navigation}) => {

  const colorScheme = useColorScheme()|| 'light'; // Provide a default value of 'light'

  return (
  <ScrollView style={[ styles.container, colorScheme === 'light' ? { backgroundColor: '#fff' } : { backgroundColor: '#333333' }, ]}>
      <Image
        style={styles.logo}
        source={require('../img/littleLemonLogo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate('Menu')}> 
        <Text style={styles.buttonText}>View Menu</Text> 
     </Pressable>
       <Image
        style={styles.image}
        source={require('../img/Picture1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture1'}
      />
      <Image
        style={styles.image}
        source={require('../img/Picture2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture2'}
      />
      <Image
        style={styles.image}
        source={require('../img/Picture3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture3'}
      />
      <Image
        style={styles.image}
        source={require('../img/Picture4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Picture4'}
      /> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    //backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    marginLeft:20,
    marginRight: 20,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Welcome;