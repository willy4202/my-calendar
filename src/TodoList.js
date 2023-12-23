import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Fragment } from "react";
import { useTodoList } from "./hook/useTodoList";
import Calendar from "./Calendar";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./Margin";
import AddTodoInput from "./AddTodoInput";
import { useCalendar } from "./hook/useCalendar";
import dayjs from "dayjs";

const TodoList = () => {
  const now = dayjs();
  const { selectedDate, setSelectedDate } = useCalendar(now);
  const { todoList, input, setInput, addTodo, removeTodo, toggleTodo } =
    useTodoList();

  ListHeaderComponent = () => {
    return (
      <>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Margin height={14} />
        <View style={styles.divider} />
        <Margin height={14} />
      </>
    );
  };

  const renderItem = ({ item }) => {
    const { isSucess } = item;
    return (
      <View style={styles.todo}>
        <Text style={styles.todoText}>{item.content}</Text>
        <Ionicons
          name="ios-checkmark"
          size={16}
          color={isSucess ? "#595959" : "#bfbfbf"}
        />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={todoList}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
      <AddTodoInput selectedDate={selectedDate} />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: "#a3a3a3",
    alignSelf: "center",
  },

  todo: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    marginVertical: 4,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderColor: "#a6a6a6",
  },
  todoText: { flex: 1, fontSize: 14 },
});
