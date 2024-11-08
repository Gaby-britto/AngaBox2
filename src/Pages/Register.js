import axios from 'axios';
import React, { useState } from "react";
import { Image, Text, View, Alert } from "react-native";
import TextField from "../Componentes/TextField";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import MyButton from "../Componentes/Button";

export default function Register() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://10.92.198.21/api/user', {
        name,
        email,
        password,
      });
      Alert.alert('Success', 'Registration completed successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to register. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../Assets/Images/logoImage.png")}
      />
      <Text style={styles.logo}>SIGN UP</Text>
      <TextField placeholder="Name" value={name} onChangeText={setName} />
      <TextField placeholder="Email" value={email} onChangeText={setEmail} />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton title="Register" onPress={handleRegister} />
      <View style={styles.containerText}>
        <Text style={styles.question}>Already have an account?</Text>
        <Text style={styles.login}>Register</Text>
      </View>
    </View>
  );
}
