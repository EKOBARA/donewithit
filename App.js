import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text presssed');
  } 
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={()=> handlePress()}>Hello World!</Text>
      <Image />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
