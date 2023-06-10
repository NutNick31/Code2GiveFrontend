import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const CounsellingForm = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
    };
    getUser();
  }, []);
  const [registerUser, setRegisterUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [college, setCollege] = useState("");
  const [age, setAge] = useState(0);
  const [number, setNumber] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [visible, setVisible] = useState(false);
  const handleSubmit = async () => {
    try {
      const data = {
        user: user.username,
        name,
        email,
        location,
        college,
        age,
        number,
      };
      console.log("12");
      const response = await axios.post(
        "http://192.168.0.101:8000/api/counselling",
        data
      );
      if (response.data.success) {
        setVisible(true);
        setVisibleText(
          "Your counselling form has been submitted successfully, you will be contacted soon"
        );
        setName("");
        setEmail("");
        setLocation("");
        setCollege("");
        setAge(0);
        setNumber("")
      } else {
        setVisible(true);
        setVisibleText(
          "Your counselling form has not been submitted successfully, please try again"
        );
      }
      console.log(response.data);
    } catch (error) {
      console.log("22");
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.2, 0.5, 0.6]}
        colors={["#E15715", "#f09bc066", "#724cfe33", "#6e49ff00"]}
      > */}
        <Text style={{ fontSize: 28, fontWeight: 500 }}>Counselling Form</Text>
        <View style={styles.formSection}>
          <Text>Name</Text>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              console.log(name);
            }}
          />
        </View>
        <View style={styles.formSection}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              console.log(email);
            }}
          />
        </View>
        <View style={styles.formSection}>
          <Text>Location</Text>
          <TextInput
            placeholder="Enter your location"
            value={location}
            onChangeText={(text) => {
              setLocation(text);
              console.log(location);
            }}
          />
        </View>
        <View style={styles.formSection}>
          <Text>College</Text>
          <TextInput
            placeholder="Enter your college"
            value={college}
            onChangeText={(text) => {
              setCollege(text);
              console.log(college);
            }}
          />
        </View>
        <View style={styles.formSection}>
          <Text>Age</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Enter your age"
            value={age}
            onChangeText={(text) => {
              setAge(text);
              console.log(age);
            }}
          />
        </View>
        <View style={styles.formSection}>
          <Text>Phone Number</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Enter your phonr number"
            value={number}
            onChangeText={(text) => {
              setNumber(text);
              console.log(number);
            }}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <View style={{ width: 0.6 * width, alignItems: "center" }}>
          {visible && <Text>{visibleText}</Text>}
        </View>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

export default CounsellingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E15715",
  },
  formSection: {
    // borderWidth: 1,
    width: 0.8 * width,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    height: 0.05 * height,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FCE9F1",
    elevation: 10,
  },
  submitButton: {
    backgroundColor: "lightblue",
    marginVertical: 10,
    borderRadius: 10,
    height: 0.05 * height,
    width: 0.5 * width,
    alignItems: "center",
    padding: 10,
    elevation: 10,
  },
});
