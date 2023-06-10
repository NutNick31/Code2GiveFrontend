import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CarouselCard from "../../components/CarouselCard";
import CarouselCard2 from "../../components/CarouselCard2";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const data = [
  {
    id: 1,
    src: { uri: "../assets/images/BREADS1.jpg" },
  },
  {
    id: 2,
    src: { uri: "../assets/images/BREADS1.jpg" },
  },
  {
    id: 3,
    src: { uri: "../assets/images/BREADS1.jpg" },
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.2, 0.5, 0.6]}
        colors={["#E15715", "#f09bc066", "#724cfe33", "#6e49ff00"]}
      >
        <Image
          style={{
            width: width * 0.8,
            height: height * 0.1,
            marginVertical: 0.05 * height,
            alignSelf: "center",
          }}
          source={require("../../assets/images/breads_bangalore-removebg-preview.png")}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarouselCard text={"BREADS Bangalore"} source={item.src} />
          )}
        />
        <ScrollView style={styles.scrollViewStyle}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("blog");
              }}
              style={styles.button}
            >
              <Text style={{ fontWeight: 400, fontSize: 17 }}>
                Useful Blogs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CounsellingForm");
              }}
              style={styles.button}
            >
              <Text style={{ fontWeight: 400, fontSize: 17 }}>
                Register for counselling
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
              style={styles.button}
            >
              <Text style={{ fontWeight: 400, fontSize: 17 }}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 500, }}>
              Our Acheivements
            </Text>
          </View>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CarouselCard2 />}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 30,
  },
  scrollViewStyle: {
    height: height*0.67,
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
    backgroundColor: "#E15715",
    width: 0.9 * width,
    alignItems: "center",
    paddingVertical: 0.04 * height,
    marginVertical: 0.01 * height,
    borderRadius: 10,
    borderColor: "black",
    // borderWidth: 1,
    elevation: 10,
  },
});
