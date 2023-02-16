import { View, Text } from 'react-native';
import React from 'react';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { myColor } from '../components/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

export default function Home() {
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
    <Tab.Navigator initialRouteName="AllEntries" screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: myColor.secondary },
        tabBarActiveTintColor: myColor.active,
        headerStyle: {backgroundColor:myColor.secondary}, 
        headerTitleStyle: {color:myColor.primary, fontSize: 18}, 
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