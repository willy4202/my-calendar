import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TODO_LIST_KEY = "todolist";
export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const getToldo = async () => {
    const result = await AsyncStorage.getItem(TODO_LIST_KEY);
    return JSON.parse(result);
  };

  const saveTodo = async (newTodoList) => {
    setTodoList(newTodoList);
    await AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
  };

  const addTodo = (selectedDate) => {
    const len = todoList.length;
    const newTodoId = len === 0 ? 0 : todoList[len - 1].id + 1;

    const newTodoList = [
      ...todoList,
      { id: newTodoId, content: input, date: selectedDate, isSuccess: false },
    ];
    saveTodo(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    saveTodo(newTodoList);
  };
  const toggleTodo = (todoId) => {
    const newtTodoList = todoList.map((todo) => {
      if (todo.id !== todoId) return todo;
      else {
        return { ...todo, isSuccess: !todo.isSuccess };
      }
    });

    saveTodo(newTodoList);
  };

  const resetInput = () => {
    setInput("");
  };

  const filteredTodoList = (selectedDate) => {
    return todoList.filter((todo) => {
      const isSameDate = dayjs(todo.date).isSame(selectedDate, "date");
      return isSameDate;
    });
  };

  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const result = await AsyncStorage.getItem(TODO_LIST_KEY);
    if (result) {
      const newTodoList = JSON.parse(result);

      setTodoList(newTodoList);
    }
  };

  return {
    todoList,
    filteredTodoList,
    input,
    setInput,
    addTodo,
    removeTodo,
    toggleTodo,
    resetInput,
  };
};
