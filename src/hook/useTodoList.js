import dayjs from "dayjs";
import { useState } from "react";

const defaultTodoList = [
  {
    id: 1,
    content: "운동하기",
    date: dayjs(),
    isSucess: false,
  },
  {
    id: 2,
    content: "공부하기",
    date: dayjs(),
    isSucess: true,
  },
  {
    id: 3,
    content: "케이크 픽업",
    date: dayjs(),
    isSucess: false,
  },
];

export const useTodoList = () => {
  const [todoList, setTodoList] = useState(defaultTodoList);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const lastTodoIdx = defaultTodoList.length - 1;
    const newTodoId =
      lastTodoIdx === 0 ? 0 : defaultTodoList[lastTodoIdx].id + 1;
    const newTodoList = [
      ...todoList,
      { id: newTodoId, content: input, date: selectedDate, isSucess: false },
    ];
    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  const toggleTodo = (id) => {
    const newtTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isSucess: !todo.isSucess };
      }
    });
    setTodoList(newtTodoList);
  };

  return {
    todoList,
    input,
    setInput,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
