import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const UserLocation = () => {
  const navigation = useNavigation();
  const [mapLocation, setMapLocation] = useState({});
  const [college, setCollege] = useState("");
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg('Permission to access location was denied')
      navigation.navigate("Quiz");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    console.log("1");
    setMapLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    // navigation.navigate('Quiz', {mapLocation})
    navigation.navigate("Quiz");
    console.log(mapLocation);
  };
  // useEffect(()=>{
  //     getLocation()
  // }, [])
  return (
    <View style={styles.container}>
      <Text>Location</Text>
      <Button title="Allow Location Permission" onPress={getLocation} />
      <View style={styles.section}>
        <Text>In which college do you study?</Text>
        <TextInput placeholder="Enter your college" value={college} onChangeText={(text)=>{setCollege(text); console.log(college)}} />
      </View>
    </View>
  );
};

export default UserLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: '20%'
  },
});
