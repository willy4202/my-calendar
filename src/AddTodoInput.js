import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import dayjs from "dayjs";
import { AntDesign } from "@expo/vector-icons";

const AddTodoInput = ({
  onChangeText,
  onPress,
  onSubmitEditing,
  selectedDate,
  onFocus,
  value,
}) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.inputText}
        placeholder={`${dayjs(selectedDate).format(
          "MM.D"
        )}에 추가할 일을 입력해주세요`}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        onFocus={onFocus}
        value={value}
      />
      <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
        <AntDesign name="plus" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoInput;

const styles = StyleSheet.create({
  root: { flexDirection: "row", alignItems: "center" },
  inputText: {
    flex: 1,
    paddingVertical: 4,
    alignSelf: "center",
    color: "#595959",
  },
});
