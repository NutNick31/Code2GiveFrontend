import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CustomeDropDown from "../../components/CustomeDropDown";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AddictionChoice = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  const data = [
    "Alcohol",
    "Internet",
    "Pornography",
    "Gambling",
    "Gaming",
    "Anger",
    "Family",
    "Suicidal",
  ];
  return (
    <View style={styles.container}>
      <CustomeDropDown
        data={data}
        value={value}
        setValue={setValue}
        string={"Choose most relevant"}
      />
      {/* <Button
        title="Next"
        onPress={() => {
          if (value == "Anger") navigation.navigate("Anger");
          else if (value == "Alcohol") navigation.navigate("Alcohol");
          else if (value == "Family") navigation.navigate("Family");
          else if (value == "Gambling") navigation.navigate("Gambling");
          else if (value == "Gaming") navigation.navigate("Gaming");
          else if (value == "Internet") navigation.navigate("Internet");
          else if (value == "Pornography") navigation.navigate("Pornography");
          else if (value == "Suicidal") navigation.navigate("Suicidal");
        }}
      /> */}
      <TouchableOpacity
        onPress={() => {
          if (value == "Anger") navigation.navigate("Anger");
          else if (value == "Alcohol") navigation.navigate("Alcohol");
          else if (value == "Family") navigation.navigate("Family");
          else if (value == "Gambling") navigation.navigate("Gambling");
          else if (value == "Gaming") navigation.navigate("Gaming");
          else if (value == "Internet") navigation.navigate("Internet");
          else if (value == "Pornography") navigation.navigate("Pornography");
          else if (value == "Suicidal") navigation.navigate("Suicidal");
        }}
        style={{
          // borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: height * 0.012,
          height: 0.06 * height,
          width: width * 0.8,
          borderRadius: 10,
          backgroundColor: "#d96741",
          elevation: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 500 }}>Seeking Help...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddictionChoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
