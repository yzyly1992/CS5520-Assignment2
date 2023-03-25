import { SafeAreaView } from 'react-native';
import EntryList from '../components/EntryList';
import React from 'react';
import { myColor } from '../components/Color';

export default function OverLimitEntries({ entries }) {
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