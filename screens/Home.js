import { View, Text } from 'react-native';
import React from 'react';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { myColor } from '../components/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';

const Tab = createBottomTabNavigator();

export default function Home() {
  const [entries, setEntries] = useState([]);
  const loadData = async () => {
    console.log("load data");
    let results = [];
    const q = await getDocs(collection(db, "entries"));
    q.forEach((doc) => results.push(doc.data()));
    setEntries(results);
    console.log(entries);
  }

  useEffect(()=>{
    loadData();
  }, [])

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
    <Tab.Navigator initialRouteName="AllEntries" screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: myColor.secondary },
        tabBarActiveTintColor: myColor.active,
        headerStyle: {backgroundColor:myColor.secondary}, 
        headerTitleStyle: {color:myColor.primary, fontSize: 18}, 
        headerTintColor: myColor.primary,
        headerTitleAlign: "center",
    }}>
        <Tab.Screen 
            name="AllEntries"
            // component={AllEntries}
            // initialParams = {{ entries:entries, addEntry:addEntry, deleteEntry:deleteEntry, checkWarning:checkWarning }}
            children={() => <AllEntries entries={entries} addEntry={addEntry} deleteEntry={deleteEntry} checkWarning={checkWarning} />}
            options={{title: 'All Entries', tabBarIcon:({ color, size })=><MaterialCommunityIcons name="tea" size={size} color={color} />}} />
        <Tab.Screen 
            name="OverLimitEntries" 
            // component={OverLimitEntries}
            // initialParams = {{ entries:entries, addEntry:addEntry, deleteEntry:deleteEntry, checkWarning:checkWarning }}
            children={() => <AllEntries entries={entries.filter(item => item.warning === true)} addEntry={addEntry} deleteEntry={deleteEntry} checkWarning={checkWarning} />}
            options={{title: 'Over-limit Entries', tabBarIcon:({ color, size })=><MaterialCommunityIcons name="alert-rhombus" size={size} color={color} />}} />
    </Tab.Navigator>
  )
}