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
        <Text style={{ fontSize: 30, fontWeight: 500, color: '#E15715' }}>
          BREADS Terms and conditions
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
          • User Consent: By using this application, you acknowledge and agree
          to the terms and conditions outlined herein.
        </Text>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          • Confidentiality of User Information: We are committed to maintaining
          the privacy and confidentiality of all user information collected
          during the use of this application. Your personal data, including your
          identity, will not be shared with any third parties without your
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
          • Data Collection: In order to provide personalized support and
          assistance, the application may collect and store certain user
          information, such as addiction type, recovery progress, and user
          preferences. This data will be used solely for the purpose of
          improving the application and tailoring it to individual needs.
        </Text>
        <Text
          style={{
            fontWeight: 400,
            // borderWidth: 1,
            width: width * 0.8,
            marginVertical: height * 0.012,
          }}
        >
          • Data Security: We employ industry-standard security measures to
          protect user data against unauthorized access, loss, or alteration.
          However, it is important to note that no method of data transmission
          or storage can be guaranteed as completely secure.
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
          <Text style={{color: '#fff'}}>Accept</Text>
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
