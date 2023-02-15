import { View, Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import EditEntry from './EditEntry';
import AddAnEntry from './AddAnEntry';
import { myColor } from '../components/Color';

const Stack = createNativeStackNavigator();

export default function Navigator() {

  return (
    <Stack.Navigator initialRouteName="AllEntries" screenOptions={{headerStyle:{backgroundColor:myColor.secondary}, headerTitleStyle:{color:myColor.primary, fontSize: 18}, headerTitleAlign:"center"}}>
        <Stack.Screen name="AllEntries" component={AllEntries} options={{title: 'All Entries'}} />
        <Stack.Screen name="OverLimitEntries" component={OverLimitEntries} options={{title: 'Over-limit Entries'}} />
        <Stack.Screen name="EditEntry" component={EditEntry} options={{title: 'Edit Entry'}} />
        <Stack.Screen name="AddAnEntry" component={AddAnEntry} options={{title: 'Add An Entry'}} />
    </Stack.Navigator>
  )
}