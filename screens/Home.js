import { View, Text } from 'react-native';
import React from 'react';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { myColor } from '../components/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator initialRouteName="AllEntries" screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: myColor.secondary },
        tabBarActiveTintColor: myColor.active,
        headerStyle: {backgroundColor:myColor.secondary}, 
        headerTitleStyle: {color:myColor.primary, fontSize: 18}, 
        headerTitleAlign: "center",
    }}>
        <Tab.Screen name="AllEntries" component={AllEntries} options={{title: 'All Entries', tabBarIcon:({ color, size })=><MaterialCommunityIcons name="tea" size={size} color={color} />}} />
        <Tab.Screen name="OverLimitEntries" component={OverLimitEntries} options={{title: 'Over-limit Entries', tabBarIcon:({ color, size })=><MaterialCommunityIcons name="alert-rhombus" size={size} color={color} />}} />
    </Tab.Navigator>
  )
}