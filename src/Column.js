import { Text, View } from "react-native";
import React from "react";

const columnSize = 35;
const Column = ({ text, color, opacity }) => {
  return (
    <View style={{ width: columnSize, height: columnSize }}>
      <Text style={{ color, opacity }}>{text}</Text>
    </View>
  );
};
export default Column;
