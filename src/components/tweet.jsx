import React from 'react-native'
import Dixmensions from 'Dimensions'
import chunk from 'lodash/array/chunk'
const {View, Text, StyleSheet} = React

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    paddingTop: 100
  }
})

export default React.createClass({
  displayName: 'Tiles',

  render () {
    return (
      <View style={styles.container}>
        <Text>Tweet</Text>
      </View>
    )
  }
})
