import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import EditEntry from './EditEntry';
import AddAnEntry from './AddAnEntry';
import { myColor } from '../components/Color';

const Stack = createNativeStackNavigator();

export default function Navigator() {

  return (
    <Stack.Navigator initialRouteName="AllEntries" screenOptions={{headerStyle:{backgroundColor:myColor.secondary}, headerTitleStyle:{color:myColor.primary, fontSize: 18}, headerTintColor:myColor.primary, headerTitleAlign:"center"}}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="EditEntry" component={EditEntry} options={{title: 'Edit Entry'}} />
        <Stack.Screen name="AddAnEntry" component={AddAnEntry} options={{title: 'Add An Entry'}} />
    </Stack.Navigator>
  )
}