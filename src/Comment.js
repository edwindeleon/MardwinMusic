import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const Comment = (props) => 
  <View style={styles.comment}>
    <Text style={styles.text}>{props.text}</Text>
  </View>

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  text: {
    fontSize: 16
  }
})

export default Comment