import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const imageUrl = { uri: "../assets/images/BREADS1.jpg" };

const CarouselCard = ({ text, source }) => {
  return (
    <ImageBackground
      source={require('../assets/images/BREADS1.jpg')}
      // source={source}
      style={{
        height: height*0.16,
        width: 0.84*width,
        backgroundColor: "#E15715",
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 10,
      }}
    >
    {/* // <LinearGradient */}
    {/* //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   locations={[0, 0.5, 0.6, 2]}
    //   colors={["#E15715", "#f09bc066", "#724cfe33", "#6e49ff00"]}
    // > */}
      {/* <View
        style={{
          height: 0.2 * height,
          width: 0.7 * width,
          alignItems: "center",
          // borderWidth: 1,
          marginHorizontal: width * 0.02,
        }}
      > */}
        {/* <Text style={{ fontSize: 14, fontWeight: 700 }}>{text}</Text> */}
      {/* </View> */}
    {/* // </LinearGradient> */}
    </ImageBackground>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
