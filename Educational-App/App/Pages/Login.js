import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './Style.js'; 
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors.js';

export default function Login() {
    return (
    <View>
      <Image source={require("../Assets/Images/top.jpg")}
      style={{ width: 394, height: 241}}/>
      <View style={styles.containerTop}>
             <Text style={styles.welcomeText}> Welcome to CodeBox </Text>
          <Text style={styles.textSignup}>Login / Sign Up</Text>
          <View style={styles.buttonGoogle}>
             <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}}/>
             <Text style={[styles.textGoogle, { color: Colors.color }]}>Sign in With Google</Text>
          </View>
      </View>
    </View>
  )
}

