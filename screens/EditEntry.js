import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { myColor } from '../components/Color';
import { MaterialIcons } from '@expo/vector-icons';
import { deleteFromDB, updateToDB } from '../Firebase/firestoreHelper';

export default function EditEntry({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Text style={styles.text}>Calories: {route.params.entry.val}</Text>
        <Text style={styles.text}>Description: {route.params.entry.name}</Text>
        <View style={styles.buttonContainer}>
          <Button 
            buttonPressed={()=>{
              Alert.alert(
                'Delete',
                'Are you sure you want to delete this?',
                [
                  {
                    text: 'No',
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      deleteFromDB(route.params.entry.id);
                      navigation.goBack();
                    },
                  },
                ],
              );
            }}
            customizedStyle={styles.iconButton}
          >
            <MaterialIcons name="delete-outline" size={24} color={myColor.primary} />
          </Button>
          { route.params.entry.warning &&  
          <Button 
            buttonPressed={()=>{
              Alert.alert(
                'Important',
                'Are you sure you want to mark this item as reviewed?',
                [
                  {
                    text: 'No',
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      updateToDB(route.params.entry.id);
                      navigation.goBack();
                    },
                  },
                ],
              );
            }}
            customizedStyle={styles.iconButton}
          >
            <MaterialIcons name="check" size={24} color={myColor.primary} />
          </Button> }
        </View>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.tertiary,
  },
  text: {
    color: myColor.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
    backgroundColor: myColor.secondary,
    alignItems: 'center',
    borderRadius: 5,
    width: 80,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
})