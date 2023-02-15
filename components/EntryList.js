import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries, deleteEntry, checkWarning }) {
  return (
    <FlatList
      contentContainerStyle={styles.scrollStyle}
      data={entries}
      renderItem={({item}) => {
        return (
          <Entry entry={item} deleteEntry={deleteEntry} checkWarning={checkWarning}/>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: 'center',
  }
})