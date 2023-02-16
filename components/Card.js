import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { myColor } from './Color';

export default function Card(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    backgroundColor: myColor.quaternary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    shadowOffset:  {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: '0.2',
    shadowRadius: 15,
    elevation: 20,
  }
})