import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Column from "./Column";
import { getDayColor, getDayText } from "./utils";

const ListHeader = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[0, 1, 2, 3, 4, 5, 6].map((day) => {
        const dayText = getDayText(day);
        let color = getDayColor(day);
        return <Column key={day} text={dayText} color={color} opacity={1} />;
      })}
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({});
