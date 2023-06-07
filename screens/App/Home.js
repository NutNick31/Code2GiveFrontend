import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CarouselCard from "../../components/CarouselCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "red", fontSize: 28, fontWeight: 700 }}>
        BREADS Bangalore
      </Text>
      <ScrollView style={styles.scrollViewStyle}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarouselCard text={"BREADS Bangalore"} />}
        />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chatbot");
            }}
            style={styles.button}
          >
            <Text>Useful Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CounsellingForm");
            }}
            style={styles.button}
          >
            <Text>Register for counselling</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={styles.button}
          >
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarouselCard text={"Testimonial"} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  scrollViewStyle: {
    // alignItems: 'center'
    // marginBottom: 20,
  },
  headingText: {
    // flex: 1,
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    // flex: 1,
    backgroundColor: "lightblue",
    width: 0.9 * width,
    alignItems: "center",
    paddingVertical: 0.04 * height,
    marginVertical: 0.01 * height,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
