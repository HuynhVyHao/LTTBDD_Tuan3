import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { View, Image,Text, StyleSheet,TouchableOpacity } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        

        <Image source={require('/D:/JavaLTTBDD/Shopee/anh/Ellipse8.png')} style={styles.image} />
        <Text style={styles.text}>
           GROW <br/>YOUR BUSINESS
        </Text>
        <Text style={styles.text1}>
        We will help you to grow your business using<br/>online server
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={[styles.text, { color: 'black' }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={[styles.text, { color: 'black' }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  loginButton: {
    backgroundColor: 'yellow', // Màu nền của nút Login
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: 'yellow', // Màu nền của nút Sign Up
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Màu chữ của nút
    fontWeight: 'bold', // Độ đậm của chữ
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gradientContainer: {
    width: 360,
    height: 640,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)',
  },
  image: {
    width: 200, // Độ rộng của ảnh
    height: 200, // Độ cao của ảnh
 
  },
  
  text: {
    fontSize: 25, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm của chữ
    textAlign: 'center', // Căn giữa chữ
    marginTop: 40, // Khoảng cách từ hình ảnh lên chữ
  },
  text1: {
    fontSize: 11, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm của chữ
    textAlign: 'center', // Căn giữa chữ
    marginTop: 40, // Khoảng cách từ hình ảnh lên chữ
  },
});
