import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'
import { useNavigation } from "@react-navigation/native";

const UserLocation = () => {
    const navigation = useNavigation()
    const [mapLocation, setMapLocation] = useState({})
    const getLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status!=='granted')
        {
            // setErrorMsg('Permission to access location was denied')
            navigation.navigate('Quiz')
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true})
        setMapLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        })

    }
    useEffect(()=>{
        getLocation()
    }, [])
  return (
    <View style={styles.container}>
      <Text>Location</Text>
      <Button title="Location Permission" onPress={getLocation}  />
    </View>
  )
}

export default UserLocation

const styles = StyleSheet.create({
    container: {
        fles: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})