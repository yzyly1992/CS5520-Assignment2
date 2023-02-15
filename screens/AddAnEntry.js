import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';

export default function AddAnEntry({ navigation, route }) {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  function checkValid() {
    if (name && value && !isNaN(value)) return true;
    return false;
  }

  function resetInput() {
    setName();
    setValue();
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Calories</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Button buttonPressed={()=>resetInput()}>
          <Text>Reset</Text>
        </Button>
        <Button buttonPressed={()=>{
          if (checkValid()) {
            let warning = false;
            let id = Math.random();
            if (value >= 500) {
              warning = true;
            }
            let newEntry = {id:id, val:value, name: name, warning: warning}
            route.params.addEntry(newEntry);
            resetInput();
            navigation.goBack();
          }
        }}>
          <Text>Submit</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}