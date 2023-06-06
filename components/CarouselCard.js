import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CarouselCard = ({text}) => {
  return (
    <ImageBackground
      source={require("../assets/images/CarouselBackground.jpg")}
      style={{
        height: 0.3 * height,
        width: 0.8 * width,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <Text style={{ color: "red", fontSize: 28, fontWeight: 700 }}>
        {text}
      </Text>
    </ImageBackground>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
