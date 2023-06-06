import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const questionOptions = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];

const Quiz = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1,
          height: 0.5 * height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: 500, fontFamily: "" }}>
          Would You like share your location
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 500, fontFamily: "" }}>
          1/5
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 0.5 * height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Answer</Text>
        <View>
          {questionOptions.map((item, i) => {
            return checked === i ? (
              <Pressable
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  marginVertical: height * 0.01,
                  marginHorizontal: width * 0.05,
                  paddingHorizontal: width * 0.05,
                  paddingVertical: height * 0.02,
                  borderRadius: 12,
                  elevation: 10,
                  width: 0.8 * width,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderColor: "#6D48FF",
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRadius: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 14,
                      width: 14,
                      backgroundColor: "#6D48FF",
                      borderRadius: 40,
                    }}
                  ></View>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10 }}>
                  {item.id === 1 ? "Yes" : "No"}
                </Text>
              </Pressable>
            ) : (
              <Pressable
                key={i}
                onPress={() => {
                  setChecked(i);
                  // setAnswerList([...answerList, questionOptions[i]])
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  marginVertical: height * 0.01,
                  marginHorizontal: width * 0.05,
                  paddingHorizontal: width * 0.05,
                  paddingVertical: height * 0.02,
                  borderRadius: 12,
                  elevation: 10,
                  width: 0.8 * width,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderColor: "#6D48FF",
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRadius: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>
                  {item.id === 1 ? "Yes" : "No"}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            width: 0.8 * width,
            alignItems: "center",
            paddingVertical: 10,
            marginVertical: 10,
            borderRadius: 10,
          }}
          onPress={()=>{navigation.navigate('Home')}}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
