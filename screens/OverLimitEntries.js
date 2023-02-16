import { View, Text, SafeAreaView } from 'react-native';
import EntryList from '../components/EntryList';
import React from 'react';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { myColor } from '../components/Color';
import { useNavigation } from '@react-navigation/native';

export default function OverLimitEntries({ entries, addEntry, deleteEntry, checkWarning }) {
  const navigation = useNavigation();

  navigation.setOptions({
    headerRight: () => {
      return (
        <Button 
        buttonPressed={()=>navigation.navigate('AddAnEntry', {addEntry:addEntry})}
        customizedStyle={{marginHorizontal: 20}}
        >
          <MaterialCommunityIcons name="plus" size={24} color={myColor.primary} />
        </Button>
      )
    }
  })
  return (
    <SafeAreaView>
      <EntryList entries={entries} deleteEntry={deleteEntry} checkWarning={checkWarning}/>
    </SafeAreaView>
  )
}