import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';

export default function Entry({ entry, deleteEntry, checkWarning }) {

  const navigation = useNavigation();

  return (
    <Button buttonPressed={()=>navigation.navigate('EditEntry', {entry:entry, deleteEntry:deleteEntry, checkWarning:checkWarning})}>
      <Text>{ entry.name }</Text>
      {entry.warning ? <Text>warning</Text> : <Text></Text>}
      <Button>
        <Text>{ entry.val }</Text>
      </Button>
    </Button>
  )
}