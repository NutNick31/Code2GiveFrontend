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
import { FontAwesome } from "@expo/vector-icons";

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

  const handleSubmit = async () => {
    try {
      // const {username, email, password} = user;
      // console.log({username, email, password, location, college})
      // const body = JSON.stringify(user)
      // setUser(JSON.stringify({ username, email, password }));
      setUser({ username, email, password });
      console.log(`1`);
      const res = await axios.post(
        "http://192.168.1.17:8000/api/auth/register/",
        user,
      );
      // const res = await axios.get("api/mlalgo");
      // console.log(res.data);
      if (res.data.success) {
        console.log(res.data.user);
        navigation.navigate("Login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error);
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
          console.log(username);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          console.log(email);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          console.log(password);
        }}
      />
      {/* <CustomeDropDown
        value={location}
        setValue={setLocation}
        data={data1}
        string={"Your Location"}
      /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ marginHorizontal: width * 0.02 }}>Let's Go</Text>
        <FontAwesome name="registered" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginVertical: height * 0.02 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>
          Already Registered?{" "}
          <Text style={{ color: "blue", fontWeight: 500 }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E15715",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    // borderWidth: 1,
    width: 0.8 * width,
    marginVertical: 0.01 * height,
    padding: 0.01 * height,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
  },
  button: {
    backgroundColor: "lightblue",
    width: 0.8 * width,
    alignItems: "center",
    paddingVertical: 0.015 * height,
    marginVertical: 0.01 * height,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
