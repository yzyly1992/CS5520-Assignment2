import { View, Text } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View>
      {props.children}
    </View>
  )
}