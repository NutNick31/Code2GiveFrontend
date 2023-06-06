import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
  const [data, setData] = useState([]);
  const apiKey = "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";
  const apiUrl =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const [textInput, setTextInput] = useState("");

  const handleSend = async () => {
    try {
      const prompt = textInput;
      console.log('prompt');
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          }
        }
      );
      const text = response.data.choices[0].text;
      setData(
        ...data,
        { type: "user", text: textInput },
        { type: "bot", text: text }
      );
      setTextInput("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Chatbot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => {
          return (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: item.type === "user" ? "green" : "red",
              }}
            >
              {item.type === "user" ? "Rajesh" : "Bot"}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
          )
        }}
      />
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Ask Me Anything"
      />
      <TouchableOpacity style={styles.button} onPress={()=>{setTimeout(handleSend, 1000)}}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatGPT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 70,
  },
  body: {
    backgroundColor: "#ffffff",
    width: "102%",
    margin: 10,
  },
  bot: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "lightblue",
    width: "90%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
  },
});
