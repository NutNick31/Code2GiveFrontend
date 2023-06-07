import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser({})
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28, fontWeight: 500}}>Profile</Text>
      <View style={styles.info}>
        <Text>Username</Text>
        <Text>{user.username}</Text>
      </View>
      <View style={styles.info}>
        <Text>Email</Text>
        <Text>{user.email}</Text>
      </View>
      <View style={styles.info}>
        <Text>Location</Text>
        <Text>{user.email}</Text>
      </View>
      <View style={styles.info}>
        <Text>College</Text>
        <Text>{user.email}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'lightblue'
  },
  info: {
    flexDirection: "row",
    width: 0.8*width,
    alignItems: "center",
    // borderWidth: 1,
    height: 0.05*height,
    justifyContent: 'space-around',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
  logoutButton: {
    backgroundColor: "lightyellow",
    marginVertical: 10,
    borderRadius: 10,
    height: 0.05*height,
    width: 0.5*width,
    alignItems: "center",
    padding: 10,
    elevation: 10,
  },
});
