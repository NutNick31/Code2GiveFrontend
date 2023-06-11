import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
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
            image: <Image source={require('../../assets/images/DREAMLOGO-removebg-preview.png')} style={{width: 0.8*width, height: 0.18*height}} />,
            title: "BREADS Bangalore",
            subtitle: "Believe you can and you're halfway there",
          },
          {
            backgroundColor: "#D15715",
            image: <Image source={require('../../assets/images/DREAMLOGO-removebg-preview.png')} style={{width: 0.8*width, height: 0.18*height}} />,
            title: "BREADS Bangalore",
            subtitle: "Your greatest strength lies in your indomitable will",
          },
          {
            backgroundColor: "#D15715",
            image: <Image source={require('../../assets/images/DREAMLOGO-removebg-preview.png')} style={{width: 0.8*width, height: 0.18*height}} />,
            title: "BREADS Bangalore",
            subtitle:
              "You are stronger than you think, you have the power to change your life.",
          },
        ]}
        // imageContainerStyles={{ width: width*0.8, height: 0.2*height, alignSelf: "center" }}
        onSkip={() => {
          navigation.navigate("Login");
        }}
        onDone={() => {
          navigation.navigate("Login");
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
