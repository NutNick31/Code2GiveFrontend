import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Results = (props) => {
    const navigation = useNavigation();
    const result = props.route.params.result;
  return (
    <View style={styles.container}>
      <Text>Results</Text>
      <Text>{result}</Text>
      <Button title="Move To Home Screen" onPress={()=>{navigation.navigate("Home")}} />
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})