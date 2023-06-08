import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CustomeDropDown = ({ value, setValue, data, string }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Pressable
      style={{
        width: 0.8 * width,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 0.01 * height,
        padding: 0.01 * height,
        alignItems: "center",
        // height: 0.1*height
      }}
      onPress={() => {
        setClicked(!clicked);
      }}
    >
      <Text>{value ? value : string}</Text>
      {clicked ? (
        <Modal style={{}}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    height: 50,
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "#8e8e8e",
                  }}
                  onPress={() => {
                    setValue(item);
                    setClicked(!clicked);
                  }}
                >
                  <Text style={{ fontWeight: "600" }}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Modal>
      ) : null}
    </Pressable>
  );
};

export default CustomeDropDown;

const styles = StyleSheet.create({});
