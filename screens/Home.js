import React from 'react';
import AllEntries from './AllEntries';
import Button from '../components/Button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { myColor } from '../components/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "entries"), (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntries([]);
      } else {
        const newEntries = [];
        querySnapshot.forEach((doc) => {
            newEntries.push({ ...doc.data(), id:doc.id });
        });
        setEntries(newEntries);
      }
    });

    // cleanup function when leaving the screen
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: myColor.secondary },
        tabBarActiveTintColor: myColor.active,
        headerStyle: {backgroundColor:myColor.secondary}, 
        headerTitleStyle: {color:myColor.primary, fontSize: 18}, 
        headerTintColor: myColor.primary,
        headerTitleAlign: "center",
    }}>
        <Tab.Screen 
            name="AllEntries"
            children={() => <AllEntries entries={entries} />}
            options={{
              title: 'All Entries', 
              tabBarIcon:({ color, size })=><MaterialCommunityIcons name="tea" size={size} color={color} />,
              headerRight: () => {
                return (
                  <Button 
                    buttonPressed={()=>navigation.navigate('AddAnEntry')}
                    customizedStyle={{marginHorizontal: 20}}
                    >
                    <MaterialCommunityIcons name="plus" size={24} color={myColor.primary} />
                  </Button>
                )
              }
            }} />
        <Tab.Screen 
            name="OverLimitEntries" 
            children={() => <AllEntries entries={entries.filter(item => item.warning === true)}/>}
            options={{
              title: 'Over-limit Entries', 
              tabBarIcon:({ color, size })=><MaterialCommunityIcons name="alert-rhombus" size={size} color={color} />,
              headerRight: () => {
                return (
                  <Button 
                    buttonPressed={()=>navigation.navigate('AddAnEntry')}
                    customizedStyle={{marginHorizontal: 20}}
                    >
                    <MaterialCommunityIcons name="plus" size={24} color={myColor.primary} />
                  </Button>
                )
              }
            }} />
    </Tab.Navigator>
  )
}