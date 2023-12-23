import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ArrowIcon = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <AntDesign name={name} size={15} color="black" />
    </TouchableOpacity>
  );
};

export default ArrowIcon;

const styles = StyleSheet.create({
  icon: {
    padding: 16,
  },
});
