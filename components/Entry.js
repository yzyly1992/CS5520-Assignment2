import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { myColor } from './Color';
import { Ionicons } from '@expo/vector-icons';

export default function Entry({ entry }) {

  const navigation = useNavigation();

  return (
    <Button 
      buttonPressed={()=>navigation.navigate('EditEntry', {entry:entry})}
      customizedStyle={styles.entry}
    >
      <Text style={styles.entryName}>{ entry.name }</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        {entry.warning && <Ionicons name="ios-warning" size={24} color={myColor.warning} />}
        <Button customizedStyle={styles.entryValueButton}>
          <Text style={styles.entryValue}>{ entry.val }</Text>
        </Button>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  entry: {
    backgroundColor: myColor.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 8,
    borderRadius: 5,
    shadowOffset:  {
      width: 5,
      height: 5,
    },
    shadowColor: 'black',
    shadowOpacity: '0.3',
    shadowRadius: 8,
    elevation: 5,
  },
  entryName: {
    color: myColor.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  entryValue: {
    color: myColor.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  entryValueButton: {
    width: 100,
    alignItems: 'center',
    backgroundColor: myColor.primary,
    borderRadius: 5,
    padding: 6,
  }
})