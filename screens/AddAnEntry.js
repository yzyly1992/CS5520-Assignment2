import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { myColor } from '../components/Color';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputItemContainer}>
          <Text style={styles.inputName}>Calories</Text>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.inputLine}
          />
        </View>
        <View style={styles.inputItemContainer}>
          <Text style={styles.inputName}>Description</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            editable
            multiline
            numberOfLines={4}
            style={styles.inputMultilines}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          buttonPressed={()=>resetInput()}
          customizedStyle={styles.inputButton}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
        <Button 
          buttonPressed={()=>{
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
          }}}
          customizedStyle={styles.inputButton}
          >
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.tertiary,
    alignItems: 'center',
  },
  inputName: {
    color: myColor.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  inputButton: {
    alignItems: 'center',
    adjustContent: 'center',
    backgroundColor: myColor.secondary,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: 120,
  },
  buttonText: {
    color: myColor.primary,
    fontSize: 18,
  },
  inputLine: {
    backgroundColor: myColor.quaternary,
    color: myColor.primary,
    fontSize: 16,
    height: 40,
    borderRadius: 5,
    padding: 10,
    flex: 2,
  },
  inputMultilines: {
    backgroundColor: myColor.quaternary,
    color: myColor.primary,
    fontSize: 16,
    height: 150,
    borderRadius: 5,
    padding: 10,
    flex: 2,
  },
  inputItemContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    adjustContent: 'center',
    margin: 20,
  }
})