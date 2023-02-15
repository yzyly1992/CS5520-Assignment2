import { View, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import EntryList from '../components/EntryList';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { myColor } from '../components/Color';

export default function AllEntries({ navigation }) {
  navigation.setOptions({
    headerRight: () => {
      return (
        <Button buttonPressed={()=>navigation.navigate('AddAnEntry', {addEntry:addEntry})}>
          <MaterialCommunityIcons name="plus" size={24} color={myColor.primary} />
        </Button>
      )
    }
  })

  const [entries, setEntries] = useState([]);

  function addEntry(entry) {
    setEntries(prev => [...prev, entry]);
  }

  function deleteEntry(entryToDelete) {
    setEntries(prev => prev.filter(item => item.id !== entryToDelete.id));
  }

  function checkWarning(entryToCheck) {
    const updatedEntries = entries.map(item =>
      item.id === entryToCheck.id
        ? { ...item, warning: false }
        : item
    );
    setEntries(prev => updatedEntries);
  }

  return (
    <SafeAreaView>
      <EntryList entries={entries} deleteEntry={deleteEntry} checkWarning={checkWarning}/>
    </SafeAreaView>
  )
}