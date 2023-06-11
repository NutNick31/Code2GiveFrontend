import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const TermsAndCondition = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 0.1 * height,
          //   borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 0.8 * width,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 500, color: "#E15715" }}>
          BREADS Disclaimer
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          • The BREADS app is a platform for the users to get a consultation
          from the experts in the field of mental health.
        </Text>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          •{" "}
          <Text style={{ fontWeight: 500 }}>
            Confidentiality of User Information
          </Text>
          : We prioritize user privacy and confidentiality. Your personal
          information will not be shared with third parties without your
          explicit consent.
        </Text>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          • <Text style={{ fontWeight: 500 }}>Data Collection</Text>: The app
          may collect user information (addiction type, recovery progress,
          preferences) to personalize support.
        </Text>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          • <Text style={{fontWeight: 500}}>Data Security</Text>: User privacy is a priority. We employ security
          measures, but complete data security cannot be guaranteed.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Location")}
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
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
});
