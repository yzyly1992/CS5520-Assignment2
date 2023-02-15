import { View, Text } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function EditEntry({ navigation, route }) {
  return (
    <Card>
      <Text>Calories: {route.params.entry.val}</Text>
      <Text>Description: {route.params.entry.name}</Text>
      <View>
        <Button onPress={()=>{
          route.params.deleteEntry(route.params.entry);
          navigation.goBack();
        }}>
          <Text>Delete</Text>
        </Button>
        { route.params.entry.warning ?  
        <Button onPress={()=>{
          route.params.checkEntry(route.params.entry);
          navigation.goBack();
        }}>
          <Text>Check</Text>
        </Button> 
        : null }
      </View>
    </Card>
  )
}