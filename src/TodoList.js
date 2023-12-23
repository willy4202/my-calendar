import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Fragment, useRef } from "react";
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
  const flatListRef = useRef(null);
  const {
    filteredTodoList,
    input,
    setInput,
    addTodo,
    removeTodo,
    toggleTodo,
    resetInput,
  } = useTodoList();
  console.log(filteredTodoList(selectedDate));
  console.log(
    "🚀 ~ file: TodoList.js:34 ~ TodoList ~ selectedDate:",
    selectedDate
  );

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

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess; // Corrected property name
    const onPress = () => {
      return toggleTodo(todo.id);
    };
    const onLongPress = () => {
      Alert.alert("삭제하시겠어요?", "", [
        { style: "cancel", text: "아니요" },
        { style: "default", text: "네", onPress: () => removeTodo(todo.id) },
      ]);
    };

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.todo}
      >
        <Text style={styles.todoText}>{todo.content}</Text>
        <Ionicons
          name="ios-checkmark"
          size={16}
          color={isSuccess ? "#595959" : "#bfbfbf"}
        />
      </Pressable>
    );
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd();
    }, 200);
  };

  const onPressAddTodo = () => {
    addTodo(selectedDate);
    resetInput();
    scrollToEnd();
  };
  const onSubmitEditing = () => {
    addTodo(selectedDate);
    resetInput();
    scrollToEnd();
  };

  const onChangeText = (value) => {
    setInput(value);
  };

  const onFocus = () => {
    scrollToEnd();
  };

  return (
    <View style={styles.root}>
      <FlatList
        ref={flatListRef}
        data={filteredTodoList(selectedDate)}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <AddTodoInput
        value={input}
        selectedDate={selectedDate}
        onPress={onPressAddTodo}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
      />
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
