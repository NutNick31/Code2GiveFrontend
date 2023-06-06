import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import CustomeDropDown from "../../components/CustomeDropDown";
import axios from "axios";

const data1 = [
  { key: "1", value: "Punjab" },
  { key: "2", value: "Kerala" },
  { key: "3", value: "New Delhi" },
  { key: "4", value: "Mumbai" },
  { key: "5", value: "Kolkata" },
  { key: "6", value: "Chennai" },
  { key: "7", value: "Haryana" },
];
// const data2 = [
//   { key: "1", value: "IIT Kharagpur" },
//   { key: "2", value: "IIT Madras" },
//   { key: "3", value: "IIT Delhi" },
//   { key: "4", value: "IIT Bombay" },
//   { key: "5", value: "NIT Trichy" },
//   { key: "6", value: "IIM Bangalore" },
//   { key: "7", value: "IIM Kozhikode" },
// ];

const Register = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState({});

  const handleSubmit = async () => {
    try {
      // const {username, email, password, location, college} = user;
      // console.log({username, email, password, location, college})
      // const body = JSON.stringify(user)
      setUser({username, email, password, location, college});
      console.log(user);
      const res = await axios.post("http://192.168.137.1:8000/api/auth/register", user);
      if (res.data.success) {
        console.log(res.data.user);
        navigation.navigate("Home");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 600 }}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name or Username"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          console.log(username)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          console.log(email)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          console.log(password)
        }}
      />
      {/* <CustomeDropDown
        value={location}
        setValue={setLocation}
        data={data1}
        string={"Your Location"}
      /> */}
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Location')}}>
        <Text>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 0.8 * width,
    marginVertical: 0.01 * height,
    padding: 0.01 * height,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "lightblue",
    width: 0.8 * width,
    alignItems: "center",
    paddingVertical: 0.01 * height,
    marginVertical: 0.01 * height,
    borderRadius: 10,
  },
});
