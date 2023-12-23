import dayjs from "dayjs";
import { useState } from "react";

const defaultTodoList = [
  {
    id: 1,
    content: "운동하기",
    date: dayjs(),
    isSuccess: false,
  },
  {
    id: 2,
    content: "공부하기",
    date: dayjs(),
    isSuccess: true,
  },
  {
    id: 3,
    content: "케이크 픽업",
    date: dayjs(),
    isSuccess: false,
  },
];

export const useTodoList = () => {
  const [todoList, setTodoList] = useState(defaultTodoList);
  const [input, setInput] = useState("");

  const addTodo = (selectedDate) => {
    const lastTodoIdx = todoList.length - 1;
    const newTodoId = lastTodoIdx === 0 ? 0 : todoList[lastTodoIdx].id + 1;

    const newTodoList = [
      ...todoList,
      { id: newTodoId, content: input, date: selectedDate, isSuccess: false },
    ];
    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  const toggleTodo = (todoId) => {
    const newtTodoList = todoList.map((todo) => {
      if (todo.id !== todoId) return todo;
      else {
        return { ...todo, isSuccess: !todo.isSuccess };
      }
    });

    setTodoList(newtTodoList);
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

  return {
    // todoList,
    filteredTodoList,
    input,
    setInput,
    addTodo,
    removeTodo,
    toggleTodo,
    resetInput,
  };
};
