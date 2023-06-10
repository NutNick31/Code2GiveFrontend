import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import Ionicons from "@expo/vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";

const Results = (props) => {
  const navigation = useNavigation();
  const result = props.route.params.result;
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.2, 0.5, 0.6]}
        colors={["#E15715", "#f09bc066", "#724cfe33", "#6e49ff00"]}
      > */}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 35, marginHorizontal: 10 }}>Results</Text>
        <Ionicons name="md-checkmark-circle" size={50} color="green" />
      </View>
      <Text style={{fontSize: 20, }}>You {result}</Text>
      {/* <Text style={{fontSize: 20, }}>You don't need a consultant</Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          width: 0.8 * width,
          alignItems: "center",
          backgroundColor: "lightblue",
          paddingVertical: height * 0.02,
          borderRadius: 10,
          marginVertical: height * 0.02,
          marginHorizontal: width * 0.02,
          elevation: 10,
        }}
        >
        <Text>Move To Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("chat");
        }}
        style={{
          width: 0.8 * width,
          alignItems: "center",
          backgroundColor: "lightblue",
          paddingVertical: height * 0.02,
          borderRadius: 10,
          marginVertical: height * 0.02,
          marginHorizontal: width * 0.02,
          elevation: 10,
        }}
      >
        <Text>Try our under development chatbot</Text>
      </TouchableOpacity>
      <View style={{marginVertical: 10,}}>
        <Foundation name="results" size={100} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d96741",
  },
});
