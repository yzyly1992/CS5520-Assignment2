import { SafeAreaView, StyleSheet } from 'react-native';
import EntryList from '../components/EntryList';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { myColor } from '../components/Color';
import { useNavigation } from '@react-navigation/native';

export default function AllEntries({ entries }) {

  const navigation = useNavigation();

  navigation.setOptions({
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
  })

  return (
    <SafeAreaView style={styles.container}>
      <EntryList entries={entries}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.tertiary,
  }
})