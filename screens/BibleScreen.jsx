import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BibleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BibleScreen</Text>
    </View>
  );
}

export default BibleScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});