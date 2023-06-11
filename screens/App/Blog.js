import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Blog = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 40, fontWeight: 700 }}>
        Blogs
      </Text>
      <ScrollView>
        <TouchableOpacity
          style={{
            //   borderWidth: 1,
            width: width * 0.8,
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: "lightgray",
            marginVertical: height * 0.02,
            elevation: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 25, fontWeight: 600 }}>
            How to control addiction?
          </Text>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: 400 }}>
            Controlling addiction requires personal commitment, professional
            support, and the cultivation of healthy coping mechanisms to regain
            control and pursue a fulfilling life free from the grips of
            addiction.<Text style={{ fontWeight: 700 }}>(Read more...)</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            //   borderWidth: 1,
            width: width * 0.8,
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: "lightgray",
            marginVertical: height * 0.02,
            elevation: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 25, fontWeight: 600 }}>
            How to build self-control?
          </Text>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: 400 }}>
            Start small and gradually increase the difficulty: Practice
            self-control by setting achievable goals and gradually challenging
            yourself to resist temptations or impulsive behaviors.{" "}
            <Text style={{ fontWeight: 700 }}>(Read more...)</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: height * 0.05,
    backgroundColor: "#E15715",
  },
});
