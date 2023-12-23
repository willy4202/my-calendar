import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const columnSize = 40;
const Column = ({
  text,
  color,
  opacity,
  onPress,
  disabled,
  isSelected,
  isToday,
  hasTodo,
}) => {
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
      {hasTodo && (
        <View
          style={{
            backgroundColor: "#27AE60",
            width: 4,
            height: 4,
            borderRadius: 8,
            position: "absolute",
            top: 4,
            marginLeft: columnSize / 2 - 2,
          }}
        />
      )}
      <Text
        style={{
          color,
          opacity,
          textAlign: "center",
          fontWeight: isToday ? "bold" : null,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Column;
