import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";

const Onboading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Auth");
        }}
      >
        <Text>Onboading</Text>
      </TouchableOpacity> */}
      <Onboarding
        pages={[
          {
            backgroundColor: "#D15715",
            title: "BREADS Bangalore",
            subtitle: "Welcome to our application",
          },
          {
            backgroundColor: "#D15715",
            title: "BREADS Bangalore",
            subtitle: "If you can think it, you are half the way",
          },
          {
            backgroundColor: "#D15715",
            title: "BREADS Bangalore",
            subtitle:
              "You are stronger than you think, you have the power to change your life.",
          },
          // ...
        ]}
        onSkip={() => {
          navigation.navigate("Register");
        }}
        onDone={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default Onboading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
