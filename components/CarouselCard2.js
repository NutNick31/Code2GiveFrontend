import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CarouselCard2 = ({story}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Success Stories</Text>
      <Text style={{ fontSize: 15, fontWeight: 300 }}>
         {story}<Text style={{fontWeight: 500}}>(Read more...)</Text>
      </Text>
    </View>
  );
};

export default CarouselCard2;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    height: 0.25 * height,
    width: 0.8 * width,
    marginHorizontal: width * 0.02,
    borderRadius: 20,
    marginVertical: height * 0.02,
    elevation: 10,
    backgroundColor: "#E15715",
    paddingVertical: height*0.015,
    paddingHorizontal: width*0.03,
  },
});
