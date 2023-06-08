import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLocation = () => {
  const navigation = useNavigation();
  const [mapLocation, setMapLocation] = useState({});
  const [college, setCollege] = useState("");
  const [user, setUser] = useState({});
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
    await AsyncStorage.setItem("location", JSON.stringify(mapLocation));
    console.log(mapLocation);
  };
  useEffect(()=>{
      getLocation()
  }, [])
  const handleSubmit= async () => {
    try {
      const user1 = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user1));
      console.log(user);
      const userid = user._id;
      const latitude = mapLocation.latitude;
      const longitude = mapLocation.longitude;
      console.log(mapLocation)
      const data = {userid, latitude, longitude, college}
      console.log(data)
      const res = await axios.post("http://192.168.1.6:8000/api/location/registerlocation/", data);
      console.log('response', res.data)
      if (res.data.success) {
        navigation.navigate("Quiz");
      }
      else{
          alert(res.data.message)
      }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }
  return (
    <View style={styles.container}>
      <Text>Location</Text>
      <Button title="Allow Location Permission" onPress={getLocation} />
      <View style={styles.section}>
        <Text>In which college do you study?</Text>
        <TextInput placeholder="Enter your college" value={college} onChangeText={(text)=>{setCollege(text); console.log(college)}} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Skip" onPress={()=>{navigation.navigate('Quiz')}}/>
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
