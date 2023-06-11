import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
  useEffect(() => {
    getLocation();
  }, []);
  const handleSubmit = async () => {
    try {
      const user1 = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user1));
      console.log(user);
      const userid = user.username;
      const latitude = mapLocation.latitude;
      const longitude = mapLocation.longitude;
      console.log(mapLocation);
      const data = { userid, latitude, longitude, college };
      console.log(data);
      const res = await axios.post(
        "http://192.168..0.105:8000/api/location/registerlocation/",
        data
      );
      console.log("response", res.data);
      if (res.data.success) {
        navigation.navigate("Quiz");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 500 }}>Location</Text>
      <TouchableOpacity
        onPress={getLocation}
        style={{
          // borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: height * 0.012,
          height: 0.06 * height,
          width: width * 0.8,
          borderRadius: 10,
          backgroundColor: "#d96741",
          elevation: 10,
        }}
      >
        <Text style={{color: '#fff'}}>Allow Location Permission</Text>
      </TouchableOpacity>
      {/* <Button title="Allow Location Permission" onPress={getLocation} /> */}
      <View style={styles.section}>
        <Text style={{ fontSize: 20 }}>In which college do you study?</Text>
        <View
          style={{
            // borderWidth: 1,
            width: "100%",
            padding: 10,
            marginVertical: height * 0.01,
            borderRadius: 10,
            backgroundColor: "#fff",
            elevation: 10,
          }}
        >
          <TextInput
            placeholder="Enter your college"
            value={college}
            onChangeText={(text) => {
              setCollege(text);
              console.log(college);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          // borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: height * 0.012,
          height: 0.06 * height,
          width: width * 0.8,
          borderRadius: 10,
          backgroundColor: "#d96741",
          elevation: 10,
        }}
      >
        <Text style={{color: "#fff", fontWeight: 500}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
        }}
        style={{
          // borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: height * 0.012,
          height: 0.06 * height,
          width: width * 0.8,
          borderRadius: 10,
          backgroundColor: "#d96741",
          elevation: 10,
        }}
      >
        <Text style={{color: "#fff", fontWeight: 500}}>Skip</Text>
      </TouchableOpacity>
      {/* <Button title="Submit" onPress={handleSubmit} />
      <Button title="Skip" onPress={()=>{navigation.navigate('Quiz')}}/> */}
    </View>
  );
};

export default UserLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  section: {
    width: 0.8 * width,
    alignItems: "center",
    justifyContent: "center",
    height: 0.2 * height,
    // borderWidth: 1,
  },
});
