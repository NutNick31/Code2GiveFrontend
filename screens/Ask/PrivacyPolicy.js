import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text>PrivacyPolicy</Text>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})