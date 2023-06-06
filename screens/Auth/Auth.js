import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import Register from "./Register";

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
}

const Auth = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        {login ? <Login /> : <Register />}
      </View>
      <Pressable
        onPress={() => {
          setLogin(!login);
          // navigator.geolocation.getCurrentPosition(showPosition);
          console.log(navigator.geolocation)
        }}
        style={{ flex: 1 }}
      >
        {!login && <Text>Already resgistered? Login</Text>}
        {login && <Text>Don't have an account? Register</Text>}
      </Pressable>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
