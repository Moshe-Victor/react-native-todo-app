import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Appls5() {
 const [name, setName] = useState('shaun');
 const [age, setAge] = useState('30');

  const clickHandler = () => {
    setName('chun-li');
    setPerson({name: 'jim', age: 20});
  }

  return (
    <View style={styles.container}>
        <Text>Enter name:</Text>
        <TextInput
            multiline
            style={styles.input}
            placeHolder= 'e.g. John Doe'
            onChangeText={(val) => setName(val)}>
        </TextInput>

         <Text>Enter age:</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    placeHolder= 'e.g. 99'
                    onChangeText={(val) => setAge(val)}>
                </TextInput>

        <Text>name: {name}, age: {age } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
    body: {
      backgroundColor: 'yellow',
      padding: 20
    },
    buttonContainer: {
          marginTop: 20
        },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
