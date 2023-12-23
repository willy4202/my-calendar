import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTodoList } from "./hook/useTodoList";
import Calendar from "./Calendar";

const TodoList = () => {
  const { todoList, input, setInput, addTodo, removeTodo, toggleTodo } =
    useTodoList();

  const renderItem = ({ item }) => {
    return <Text>{item.content}</Text>;
  };
  ListHeaderComponent = <Calendar />;
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
});
