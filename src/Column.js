import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const columnSize = 35;
const Column = ({ text, color, opacity, onPress, disabled, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        width: columnSize,
        height: columnSize,
        backgroundColor: isSelected ? "#c2c2c2" : "transparent",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: columnSize / 2,
      }}
    >
      <Text style={{ color, opacity, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Column;
