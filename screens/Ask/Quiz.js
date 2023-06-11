import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import InitialQuestionsList from "./InitialQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'

var answerList = [
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
  "NA",
];

const Quiz = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // const [answerList, setAnswerList] = ([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionList, setQuestionList] = useState(InitialQuestionsList);
  const questionOptions =
    questionList[questionNumber].question_options.split(",");
  // console.log(answerList.length);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
      console.log(user)
    };
    getUser();
  }, []);
  const handlePress = async () => {
    if (questionNumber + 1 === questionList.length) {
      // const username = user.username
      // const res = await axios.post("http://192.168.0.105:8000/api/qna/createquestionanswer", {username, answers: answerList})
      // console.log(res.data)
      navigation.navigate("AddictionChoice");
      console.log(answerList);
    } else {
      // setAnswerList(answerList[questionNumber] = selectedAnswer);
      // answerList, setAnswerList
      // setAnswerList([...answerList, selectedAnswer]);
      answerList[questionNumber] = selectedAnswer;
      setSelectedAnswer("");
      console.log(answerList);
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightgray" }}>
      <View
        style={{
          // borderWidth: 1,
          height: 0.5 * height,
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          // backgroundColor: "#6D48FF",
          // elevation: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 500, fontFamily: "" }}>
          {questionList[questionNumber].question}
        </Text>
        {/* <Text style={{ fontSize: 20, fontWeight: 500, fontFamily: "" }}>
          Question No. {questionNumber + 1}
        </Text> */}
      </View>
      <View
        style={{
          // borderWidth: 1,
          height: 0.5 * height,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "lightgray",
        }}
      >
        {/* <Text>Answer</Text> */}
        <View>
          {questionList[questionNumber].question_type === "mcq" ? (
            questionOptions.map((item, i) => {
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
                      borderColor: "#D15715",
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
                        backgroundColor: "#D15715",
                        borderRadius: 40,
                      }}
                    ></View>
                  </TouchableOpacity>

                  <Text style={{ marginHorizontal: 10 }}>
                    {questionOptions[i]}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  key={i}
                  onPress={() => {
                    setChecked(i);
                    setSelectedAnswer(questionOptions[i]);
                    console.log(selectedAnswer);
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
                      borderColor: "#D15715",
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
                    {questionOptions[i]}
                  </Text>
                </Pressable>
              );
            })
          ) : (
            <View
              style={{
                width: 0.8 * width,
                padding: 10,
                borderRadius: 10,
                backgroundColor: "lightgray",
                elevation: 10,
                marginVertical: 10,
                borderColor: "lightgray",
              }}
            >
              <TextInput
                placeholder="Enter Your Answer"
                value={selectedAnswer}
                onChangeText={(text) => {
                  setSelectedAnswer(text);
                  console.log(selectedAnswer);
                }}
              />
            </View>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            width: 0.8 * width,
            alignItems: "center",
            paddingVertical: 10,
            marginVertical: 10,
            elevation: 10,
            borderRadius: 10,
          }}
          onPress={handlePress}
          // onPress={() => {
          //   if (questionNumber + 1 === questionList.length) {
          //     navigation.navigate("AddictionChoice");
          //     console.log(answerList);
          //   } else {
          //     // setAnswerList(answerList[questionNumber] = selectedAnswer);
          //     // answerList, setAnswerList
          //     // setAnswerList([...answerList, selectedAnswer]);
          //     answerList[questionNumber] = selectedAnswer;
          //     setSelectedAnswer("")
          //     console.log(answerList);
          //     setQuestionNumber(questionNumber + 1);
          //   }
          // }}
        >
          <Text style={{ fontSize: 20 }}>
            {questionNumber + 1 === questionList.length ? "Submit" : "Next"}
          </Text>
        </TouchableOpacity>
        {questionNumber !== 0 && (
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              width: 0.8 * width,
              alignItems: "center",
              paddingVertical: 10,
              marginVertical: 10,
              elevation: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              setQuestionNumber(questionNumber - 1);
            }}
          >
            <Text style={{ fontSize: 20 }}>Previous</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
