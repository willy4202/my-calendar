import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { useTodoList } from "./hook/useTodoList";
import Calendar from "./Calendar";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./Margin";

const TodoList = () => {
  const { todoList, input, setInput, addTodo, removeTodo, toggleTodo } =
    useTodoList();

  const renderItem = ({ item }) => {
    const { isSucess } = item;
    return (
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          width: "100%",
          marginVertical: 4,
          borderRadius: 12,
          paddingVertical: 10,
          paddingHorizontal: 6,
          borderBottomWidth: 1,
          borderColor: "#a6a6a6",
        }}
      >
        <Text style={{ flex: 1, fontSize: 14 }}>{item.content}</Text>
        <Ionicons
          name="ios-checkmark"
          size={16}
          color={isSucess ? "#595959" : "#bfbfbf"}
        />
      </View>
    );
  };
  ListHeaderComponent = () => {
    return (
      <Fragment>
        <Calendar />
        <Margin height={14} />
        <View style={styles.divider} />
        <Margin height={14} />
      </Fragment>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={todoList}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  divider: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: "#a3a3a3",
    alignSelf: "center",
  },
});
