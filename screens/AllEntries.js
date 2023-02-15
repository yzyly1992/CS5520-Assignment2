import { View, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import EntryList from '../components/EntryList';

export default function AllEntries({ navigation }) {
  const [entries, setEntries] = useState([]);

  function addEntry(entry) {
    setEntries(prev => [...prev, entry]);
  }

  function deleteEntry(entryToDelete) {
    setEntries(prev => prev.filter(entry => entry.id !== entryToDelete.id));
  }

  function checkWarning(entryToCheck) {
    const updatedEntries = entries.map(entry =>
      entry.id === entryToCheck.id
        ? { ...entry, warning: false }
        : entry
    );
    setEntries(prev => updatedEntries);
  }

  return (
    <SafeAreaView>
      <EntryList entries={entries} deleteEntry={deleteEntry} checkWarning={checkWarning}/>
    </SafeAreaView>
  )
}