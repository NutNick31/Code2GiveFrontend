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
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = async () => {
    try {
    //   const res = await axios.post("http://192.168.0.105:8000/api/auth/login/", {
    //     username,
    //     password,
    //   });
    // console.log(res.data)
    //   if (res.data.success) {
    //     console.log(res.data.user);
    //     await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
        navigation.navigate("tnc");
      // } else {
      //   alert(res.data.message);
      // }
    } catch (error) {
      console.log("1", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 600 }}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{marginHorizontal: width*0.02}}>Let's Go</Text>
        <AntDesign name="login" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical: height*0.02}} onPress={() => navigation.navigate("Register")}>
        <Text>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    borderRadius: 10,
    padding: 0.01 * height,
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
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
